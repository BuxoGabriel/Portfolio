const num_boids = 100

const canvas = document.getElementById("canvas")

/**
 * Represents a 2d vector
 */
class Vector {
    /**
     * Creates a new vector given an x and y
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    /**
     * Adds another vector to this vector
     * @param {Vector} v the vector to add to this one
     * @returns {Vector} returns this for chaining
     */
    add(v) {
        this.x += v.x
        this.y += v.y
        return this
    }

    /**
     * Subtracts another vector to this vector
     * @param {Vector} v the vector to subtract from this one
     * @returns {Vector} returns this for chaining
     */
    subtract(v) {
        this.x -= v.x
        this.y -= v.y
        return this
    }
    
    /**
     * Scales this vector by a scaler
     * @param {number} v The number you would like to scale by
     * @returns {Vector} returns this for chaining
     */
    scale(scaleValue) {
        this.x *= scaleValue
        this.y *= scaleValue
        return this
    }

    /**
     * normalizes this vector to its unit vector
     * @returns {Vector} returns this for chaining
     */
    normalize() {
        if(this.x == 0 && this.y == 0) return this
        let mag = this.magnitude()
        this.x /= mag
        this.y /= mag
        return this
    }

    /**
     * clamps this vector to a certain max length
     * @param {number} max 
     * @returns {Vector} returns this for chaining
     */
    clamp(max) {
        if(max == 0) {
            this.x = 0
            this.y = 0
            return this
        }
        let mag = this.magnitude()
        if(mag > max) {
            this.x = this.x / mag * max
            this.y = this.y / mag * max
        }
        return this
    }

    /**
     * @returns {number} The square magnitude of this vector
     */
    magnitudeSq() {
        return this.x * this.x + this.y * this.y
    }

    /**
     * @returns {number} The magnitude of this vector
     */
    magnitude() {
        return Math.sqrt(this.magnitudeSq())
    }

    /**
     * Applys a 2x2 matrix to a vector
     * @param {number[]} m a 2x2 matrix as a 1d array
     */
    applyMatrix(m) {
        let x = m[0] * this.x + m[1] * this.y
        let y = m[2] * this.x + m[3] * this.y
        this.x = x
        this.y = y
        return this
    }

    /**
     * @returns {Vector} A clone of this vector
     */
    clone() {
        return new Vector(this.x, this.y)
    }

    /**
     * Creates a new scaled vector
     * @param {Vector} vec the vector you would like get a scaled version of
     * @param {number} scaleValue the scaler you would likt to multiply by
     */
    static scale(vec, scaleValue) {
        return new Vector(vec.x * scaleValue, vec.y * scaleValue)
    }

    /**
     * Creates a new [0, 0] Vector
     * @returns {Vector} A [0, 0] Vector
     */
    static zero() {
        return new Vector(0, 0)
    }

    /**
     * Creates a new random vector that points to somewhere on the unit circle 
     * @returns {Vector} returns the new vector
     */
    static random() {
        let ang = Math.random() * Math.PI * 2
        let x = Math.cos(ang)
        let y = Math.sin(ang)
        return new Vector(x, y)
    }
}

/**
 * Represents a physical particle that can interact with physics
 */
class PhysicsParticle {
    /**
     * Creates a new Physics Particle
     * @param {Vector} position The starting position of the object
     * @param {number} mass The mass of the particle
     */
    constructor(position, mass) {
        if(mass == 0) throw new Error("Can not initialize PhysicsParticle with mass of 0!")
        this.position = position
        this.velocity = Vector.zero()
        this.mass = mass
    }

    /**
     * sets the velocity of the particle
     * @param {Vector} v 
     */
    setVelocity(v) {
        this.velocity = v
    }


    pullToTarget(position, force) {
        return new Vector(position.x - this.x, position.y - this.y).normalize().scale(force)
    }
    
    pullToMovingTarget(position, velocity, force, delta) {
        return new Vector(position.x + velocity.x * delta - this.position.x, position.y + velocity.y * delta - this.position.y).normalize().scale(force)
    }
    
    /**
     * Applys a force to the particle.
     * 
     * Does not call update.
     * @param {Vector} f 
     * @param {number} delta 
     */
    applyForce(f, delta) {
        this.velocity.add(Vector.scale(f, 1/this.mass).scale(delta))
    }

    /**
     * Updates the position of the particle based on its velocity.
     * 
     * Does not call draw.
     * @param {number} delta 
     */
    update(delta) {
        this.position.add(Vector.scale(this.velocity, delta)) 
    }
}

/**
 * Represents a particle with flocking behavior
 */
class Boid extends PhysicsParticle{
    static MASS = 1
    static SIZE = 10
    static SPEED = 5
    static VISION_RANGE = 50
    static VISION_RANGE_SQ = Boid.VISION_RANGE * Boid.VISION_RANGE
    static MAX_FORCE = 5
    static AVOID_FORCE = 1
    static ALIGNMENT_FORCE = 0.25
    static COHERENCE_FORCE = 0.25
    static SEPERATION_FORCE = 5
    /**
     * Creates a new Boid with a random starting velocity
     * @param {number} x The initial x position of the boid
     * @param {number} y The intial y position of the boid
     */
    constructor(x, y) {
        super(new Vector(x, y), Boid.MASS)
        this.velocity = Vector.random().scale(Boid.SPEED)
    }
    
    getAvoidForce() {
        let avoidForce = Vector.zero();
        if(this.position.x <= Boid.VISION_RANGE) {
            avoidForce.x += Boid.AVOID_FORCE
        } else if(this.position.x >= width - Boid.VISION_RANGE) {
            avoidForce.x -= Boid.AVOID_FORCE
        }
        if(this.position.y <= Boid.VISION_RANGE) {
            avoidForce.y += Boid.AVOID_FORCE
        } else if(this.position.y >= height - Boid.VISION_RANGE) {
            avoidForce.y -= Boid.AVOID_FORCE
        }
        return avoidForce
    }

    processVisibleBoids(boids) {
        let nearbyBoids = []
        let avgPos = Vector.zero()
        let avgVel = Vector.zero()
        let totalSep = Vector.zero()
        boids.forEach(boid => {
            if(boid == this) return
            let displacement = boid.position.clone().subtract(this.position)
            let dispMagSq = displacement.magnitudeSq()
            if(dispMagSq <= Boid.VISION_RANGE_SQ) {
                nearbyBoids.push(boid)
                avgPos.add(boid.position)
                avgVel.add(boid.velocity)
                totalSep.add(this.position.clone().subtract(boid.position).scale(1 / Math.max(dispMagSq, 0.001)))
            }
        })
        if(nearbyBoids.length != 0) {
            avgPos.scale(1/nearbyBoids.length)
            avgVel.scale(1/nearbyBoids.length)
        }
        return { nearbyBoids, avgPos, avgVel, totalSep }
    }

    getAlignment(avgVel) {
        return avgVel.clone().subtract(this.velocity).normalize().scale(Boid.ALIGNMENT_FORCE)
    }

    getCoherence(avgPos, avgVel, delta) {
        return this.pullToMovingTarget(avgPos, avgVel, Boid.COHERENCE_FORCE, delta)
    }

    getSeperation(totalSep) {
        return totalSep.scale(Boid.SEPERATION_FORCE)
    }

    update(delta) {
        let { nearbyBoids, avgPos, avgVel, totalSep} = this.processVisibleBoids(boids)
        let forces = this.getAvoidForce()
        if(nearbyBoids.length !== 0) {
            forces.add(this.getAlignment(avgVel))
            forces.add(this.getCoherence(avgPos, avgVel, delta))
            forces.add(this.getSeperation(totalSep))
        }
        forces.clamp(Boid.MAX_FORCE)
        this.applyForce(forces, delta)
        this.velocity.clamp(Boid.SPEED)
        super.update(delta)
    }

    /**
     * Draws this boid as an arrow using p5js
     */
    draw() {
        stroke("black")
        fill("white")
        const x = this.position.x
        const y = this.position.y
        let offset;
        const velMag = this.velocity.magnitude()
        const rotationMatrix = [this.velocity.y, this.velocity.x, -this.velocity.x, this.velocity.y].map(x => x / velMag)
        beginShape()
        offset = new Vector(0, Boid.SIZE).applyMatrix(rotationMatrix)
        vertex(x + offset.x, y + offset.y)
        offset = new Vector(Boid.SIZE * 2 / 3, -Boid.SIZE / 2).applyMatrix(rotationMatrix)
        vertex(x + offset.x, y + offset.y)
        vertex(x, y)
        offset = new Vector(-Boid.SIZE * 2 / 3, -Boid.SIZE / 2).applyMatrix(rotationMatrix)
        vertex(x + offset.x, y + offset.y)
        offset = new Vector(0, Boid.SIZE).applyMatrix(rotationMatrix)
        vertex(x + offset.x, y + offset.y)
        endShape()
    }
}

// Array where boids are held
const boids = []

function initBoids() {
    for(let i = 0; i < num_boids; i++) {
        let x = Math.random() * width
        let y = Math.random() * height
        boids.push(new Boid(x, y))
    }
}

function setup() {
    createCanvas(600, 600, canvas)
    initBoids()
}

function draw() {
    background("#eeeeee")
    boids.forEach(boid => {
        boid.update(1)
        boid.draw()
    })
}
