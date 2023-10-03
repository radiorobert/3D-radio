const vertexShader = `
uniform float u_time;
uniform float u_freq;
uniform bool u_power;

varying vec2 vUv;
varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
   // modelPosition.y += sin(modelPosition.x * 4.0 + u_time + u_freq) + sin(modelPosition.x * 3.0 + u_time + u_freq) * 0.2;
   // modelPosition.y += sin(modelPosition.x * 4.0 + u_time + u_freq) + sin(modelPosition.x * 3.0 + u_time + u_freq) * 0.2;
   // Multiply by u_freq to make the frequency go up
   // A * sin( F*t + theta ) where A = amplitude, F = frequency and theta = phase shift

  if(u_power) {
    modelPosition.y += (0.2 * sin(modelPosition.x * 2.0 + (u_freq * 2.0))) + (0.1 * sin(modelPosition.x * 3.8 + (u_time * 10.0))) + (0.4 * sin(modelPosition.x * 2.0 + (u_freq * 12.0)));
  }
  vZ = modelPosition.y;

  // Uncomment the code and hit the refresh button below for a more complex effect 🪄
  //modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

`;

export default vertexShader;
