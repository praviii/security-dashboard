package main

import (
	"github.com/gin-gonic/gin"
	"github.com/praveen/security-dashboard-api/handler"
	"github.com/praveen/security-dashboard-api/repository"
	"github.com/praveen/security-dashboard-api/routes"
	"github.com/praveen/security-dashboard-api/service"
)

func main() {
	r := gin.Default()

	userRepo := repository.NewReposiroty()
	userSvc := service.NewService(userRepo)
	userHandler := handler.NewUserHandler(userSvc)

	routes.RegisterUserRoutes(r, userHandler)
	r.Run()
}
