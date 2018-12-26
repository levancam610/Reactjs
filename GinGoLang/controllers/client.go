package controllers

import (
	"../DTO"
	"../database"
	"fmt"
	"github.com/gin-gonic/gin"
	"io"
	"log"
	"os"
)

type Post struct {
	Id int `json:"id"`
	FirstName string `json:"title"`
	LastName string
	Email string
	UserName string
	PassWord string
}

type Clothes struct {
	Id int
	Name string
	CategoryId int
	Gender, Description string
	Amount float32
	Price float32
}

func FindById(c * gin.Context){
/*
	db := database.DBConn()
	rows, err := db.Query("SELECT * FROM users WHERE id = " + c.Param("id"))
	if err != nil{
		c.JSON(500, gin.H{
			"messages" : "Story not found",
		});
	}

	 := Post{}

	for rows.Next(){
		var id, categoryId int
		var amount, price float32
		var name, gender string

		err = rows.Scan(&id, &name, &categoryId, &gender, &amount, &price)
		if err != nil {
			panic(err.Error())
		}

		post.Id = id
		post.FirstName = firstName
		post.LastName = lastName
		post.Email = email
		post.UserName = userName
		post.PassWord = passWord
	}

	c.JSON(200, post)
	defer db.Close() // Hoãn lại việc close database connect cho đến khi hàm Read() thực hiệc xong*/
}

func GetList(c * gin.Context){
	db := database.DBConn()
	rows, err := db.Query("SELECT * FROM clothes")
	if err != nil{
		c.JSON(500, gin.H{
			"messages" : "Story not found",
		});
	}

	post := DTO.QuanDTO{}
	list := [] DTO.QuanDTO{}
	for rows.Next(){
		var id, categoryId, types int
		var amount, price float32
		var name, gender, description string

		err = rows.Scan(&id, &name, &categoryId, &gender, &amount, &price, &description, &types)
		if err != nil {
			panic(err.Error())
		}

		post.Id = id
		post.Name = name
		post.Amount = amount
		post.CategoryId = categoryId
		post.Gender = gender
		post.Price = price
		post.Description = description
		post.Type = types
		list = append(list,post);
	}

	c.JSON(200, list)
	defer db.Close() // Hoãn lại việc close database connect cho đến khi hàm Read() thực hiệc xong
}
func Create(c * gin.Context){
	db := database.DBConn()
	var json Clothes
	if err := c.ShouldBindJSON(&json); err == nil {
		stm, err := db.Prepare("INSERT INTO clothes set name=?, categoryId=?, gender=?, amount=?, price=?, description=?")
		if err != nil {
			panic(err.Error())
		}
		stm.Exec(json.Name,json.CategoryId, json.Gender, json.Amount, json.Price, json.Description)
		c.JSON(200, gin.H{
			"messages": "inserted",
		})

	} else {
		c.JSON(500, gin.H{"error": err.Error()})
	}

	defer db.Close()
}
func UploadFile(c * gin.Context){
	file, header , err := c.Request.FormFile("fileUpload")
	filename := header.Filename
	fmt.Println(header.Filename)
	out, err := os.Create("./images/"+filename+".png")
	if err != nil {
		log.Fatal(err)
	}
	_, err = io.Copy(out, file)
	if err != nil {
		log.Fatal(err)
	}
	defer out.Close()
}
