import * as THREE from 'three';
import styled from 'styled-components';
import { useEffect, useRef } from 'react'

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -10;
  width: 100vw;
  height: 100vh;
`

const WarpBackground = () => {
  const bg = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    const mouse = new THREE.Vector2();
    const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
    const target = new THREE.Vector2();
    
    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    let renderer = new THREE.WebGLRenderer;
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.background = new THREE.Color(0x020306)
    bg.current.appendChild(renderer.domElement);
    document.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('resize', onResize, false);

    let starBox = new THREE.BufferGeometry();
    let vertices = {
      positions: [],
      accelerations: [],
      velocities: [],
    };
    for (let i = 0; i < 6000; i++) {
      vertices.positions.push(Math.random() * 600 - 300);
      if (i % 3 === 0) {
        vertices.accelerations.push(0);
        vertices.velocities.push(4);
      }
    }
    starBox.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices.positions), 3));

    let starImage = new THREE.TextureLoader().load('https://ik.imagekit.io/fikri/portfolio/assets/circle.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669879506579');
    let starMaterial = new THREE.PointsMaterial({
      color: 0xA162E8,
      size: 1,
      map: starImage
    });

    let stars = new THREE.Points(starBox, starMaterial);
    scene.add(stars);

    animate();

    function onMouseMove(event) {
      mouse.x = (event.clientX - windowHalf.x);
      mouse.y = (event.clientY - windowHalf.x);
    }

    function onResize(event) {

      const width = window.innerWidth;
      const height = window.innerHeight;

      windowHalf.set(width / 2, height / 2);

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

    }

    function animate() {
      target.x = (1 - mouse.x) * 0.0002;
      // target.y = (1 - mouse.y) * 0.0002;

      // camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
      camera.rotation.y += 0.05 * (target.x - camera.rotation.y);
      
      for (let i = 0; i < vertices.velocities.length; i++) {
        vertices.velocities[i / 3 + i % 3] += vertices.accelerations[i];
        vertices.positions[i * 3 + 1] -= vertices.velocities[i];
        if (vertices.positions[i * 3 + 1] < -200) {
          vertices.positions[i * 3 + 1] = 400;
          vertices.velocities[i / 3 + i % 3] = 0;
        }
      }
      stars.rotation.y += 0.002;
      starBox.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices.positions), 3));
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
  }, [])

  return (
    <Container ref={bg} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1200"></Container>
  )
}

export default WarpBackground