#version 130

out vec4 fragColor;

in vec4 fColor;
in vec2 fTexCoord;

uniform sampler2D texture;

void main() {
    fragColor=texture2D(texture,fTexCoord);
    //fragColor=fColor;
}
