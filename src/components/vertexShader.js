const vertexShader = `
uniform float u_time;
uniform float u_freq;

varying vec2 vUv;
varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(modelPosition.x * 4.0 + u_time + u_freq) * sin(modelPosition.x * 3.0 + u_time + u_freq) * 0.2;

  vZ = modelPosition.y;

  // Uncomment the code and hit the refresh button below for a more complex effect 🪄
  // modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

`;

export default vertexShader;
