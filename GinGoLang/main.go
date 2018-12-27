package main

import (
	controller "./controllers"
	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	r := gin.Default()

	client := r.Group("/api")
	{
		client.POST("/clothes/create", controller.CreateClothes)
		client.GET("/clothes", controller.GetList)
		client.GET("/category", controller.GetAllCategory)
		client.POST("/form_post", func(c *gin.Context) {
			if(c.Request.Method=="POST"){
				message := c.PostForm("message")
				nick := c.DefaultPostForm("nick", "anonymous")
				c.JSON(200, gin.H{
					"status":  "posted",
					"message": message,
					"nick":    nick,
				})
			}

		})
	}

	return r
}

func main() {
	r := setupRouter()
	r.Run(":8080") // Ứng dụng chạy tại cổng 8080
}