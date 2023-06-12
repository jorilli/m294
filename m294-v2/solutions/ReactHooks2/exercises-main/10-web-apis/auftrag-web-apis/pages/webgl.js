import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useEffect, useRef } from "react"
import styles from "./webgl.module.css"

export default function WebGL() {
    const threeRef = useRef()
    const canvasRef = useRef()

    useEffect(() => {
        const loader = new GLTFLoader()
        const scene = new THREE.Scene()
        scene.add(new THREE.DirectionalLight())
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true })
        renderer.setSize(window.innerWidth , window.innerHeight )

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth , window.innerHeight )
        }

        window.addEventListener("resize", onWindowResize)

        loader.load("/NCC-1701/bbc.glb", (gltf) => {
            scene.add(gltf.scene)
        }, (xhr) => {
        }, (error) => {
            console.error(error)
        })

        camera.position.set(5, 2, 5)
        camera.lookAt(0, 0, 0)

        function animate() {
            requestAnimationFrame(animate)
            scene.rotateY(0.01)
            renderer.render(scene, camera)
        }

        threeRef.current = {
            scene, camera, renderer
        }

        animate()
    }, [])

    return (
        <div className={styles.container}>
            <canvas ref={ canvasRef } className={styles.canvas}/>
            <input className={styles.input} type="color" onChange={ e => threeRef.current.renderer.setClearColor(new THREE.Color(e.target.value)) }/>
        </div>
    )
}