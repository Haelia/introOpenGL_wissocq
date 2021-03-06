#version 130
        
in vec3 position;
in vec4 color;
in vec2 texCoord;

uniform float coeff;

out vec4 fColor;
out vec2 fTexCoord;
        
void main() {
    vec3 newPosition=position;
    newPosition *= coeff;
    fColor=color;
    fTexCoord = texCoord;
    gl_Position=vec4(newPosition,1.0);
}
