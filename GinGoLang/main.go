package main

import (
	controller "./controllers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:8000"},
		AllowMethods:     []string{"POST", "GET"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
	/*	ExposeHeaders:    []string{"Content-Length"},*/
	}))
	router.Use(cors.New(config))
	client := router.Group("/api")
	{
		client.POST("/clothes/create", controller.CreateClothes)
		client.GET("/clothesList/:page", controller.GetList)
		client.GET("/category", controller.GetAllCategory)
		client.DELETE("/clothes/delete/:id", controller.DeleteClothes)
		client.POST("/clothes/uploadImage", controller.UploadImage)
		client.GET("/clothes/image/:id", controller.GetImageByClothesId)
		client.DELETE("/clothes/image/delete/:id", controller.DeleteClothes)
		client.GET("/clothes/countPage", controller.CountPageClothes)
	}

	return router
}

func main() {
	router := setupRouter()
	router.Run(":8080") // Ứng dụng chạy tại cổng 8080
}