#version 130

out vec4 fragColor;

in vec4 fColor;
in vec2 fTexCoord;

uniform float coeff;
uniform sampler2D texture;

void main() {
    //fragColor=fColor;
    //fragColor=texture2D(texture,fTexCoord);
     // rouge de la texture multiplié par le rouge de fColor, idem pour green, et blue.
  //  fragColor=texture2D(texture,fTexCoord)*fColor; // fColor étant la couleur interpolée aux sommets(questions précédentes)
     fragColor=texture2D(texture,fTexCoord)*fColor.b; // coeff = uniform passée par l'application (questions précédentes).
     fragColor.g*=(1.0-coeff);
}
