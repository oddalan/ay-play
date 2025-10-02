#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <iostream>

using namespace std;

void display(GLFWwindow* window, double currentTime){
    glClearColor(1.0, 0.0, 0.0, 1.0);
    
}

int main(void){
    if (!glfwInit()){ exit(EXIT_FAILURE);}
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4)
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3)
    GLFWwindow* window = glfwCreateWindow(600, 600, "Chapter2 - program1", NULL, NULL)
    glfwMakeContextCurrent(window)
    if (glewInit() != GLEW_OK){ exit(EXIT_FAILURE);}
    glfwSwapInterval(1)

    init(window);

    while (!glwfWindowSouldClose(window)){
        display(window, glfwGetTime());
        glfwSwapBuffers(window);
        glfwPollEvents();
    }
    
    glfwDestroyWindow(window);
    glfwTerminate()
    exit(EXIT_SUCCESS);
}