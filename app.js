const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

function createRandomCube() {
    const geometry = new THREE.BoxGeometry(30, 30, 30);
    const material = new THREE.MeshStandardMaterial({
        color: 0x808080,
        roughness: 0.7,
        metalness: 0.1,
        transparent: true,
        opacity: 0.5
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(
        Math.random() * 4000 - 2000,
        Math.random() * 4000 - 2000,
        Math.random() * 4000 - 2000
    );

    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    return cube;
}

const cubes = [];
const numCubes = 500;
for (let i = 0; i < numCubes; i++) {
    cubes.push(createRandomCube());
}

camera.position.z = 2500;
camera.position.y = 400;

const ambientLight = new THREE.AmbientLight(0x303030);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);

    cubes.forEach(cube => {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
    });

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".content");

    // Affiche toutes les sections par défaut (au début sur Accueil)
    sections.forEach(section => {
        section.style.display = "block";
    });

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Empêche le rechargement de la page
            const targetId = link.getAttribute("href").substring(1); // Récupère l'ID cible

            // Si "Accueil" est cliqué, montre toutes les sections
            if (targetId === "accueil") {
                sections.forEach(section => {
                    section.style.display = "block";
                    
                });
            } else {
                // Sinon, on cache toutes les sections et affiche celle qui est cliquée
                sections.forEach(section => {
                    section.style.display = "none";
                });
                document.getElementById(targetId).style.display = "block";
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});