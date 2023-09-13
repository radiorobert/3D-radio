const vertexShader = `
#define S smoothstep

uniform vec3 u_resolution;
uniform float u_time;

varying vec2 vUv;

vec4 Line(vec2 uv, float speed, float height, vec3 col) {
    uv.y += S(1., 0., abs(uv.x)) * sin(u_time * speed + uv.x * height) * .2;
    return vec4(S(.06 * S(.2, .9, abs(uv.x)), 0., abs(uv.y) - .004) * col, 1.0) * S(1., .3, abs(uv.x));
}

void main() {
    vec2 fragCoord = vUv * u_resolution
    vec2 uv = (vUv - .5 * u_resolution.xy) / u_resolution.y;
    gl_FragColor = vec4 (0.);
    for (float i = 0.; i <= 5.; i += 1.) {
        float t = i / 5.;
        gl_FragColor += Line(uv, 1. + t, 4. + t, vec3(.2 + t * .7, .2 + t * .4, 0.3));


    }
}
`;

export default vertexShader;
