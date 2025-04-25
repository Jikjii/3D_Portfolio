const gltfjsx = require('@react-three/gltfjsx');
gltfjsx({
    input: './optimized-room.glb',
    output: './OptimizedRoom.jsx',
    draco: false
});