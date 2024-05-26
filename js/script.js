// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the Cat fact.
 * The "async" is there because it will take time for the internet to return the value
 */
async function getCatFact() {
  // the "try" id here because the internet may not be working
  // it is like an "if ... else" statement"
  try {
    const resultJSON = await fetch("https://cat-fact.herokuapp.com/facts")
    const jsonData = await resultJSON.json()
    //console.log(jsonData)

    // NOTE: there are 5 (0 to 4) cat facts
    const randomFactNumber = Math.floor(Math.random() * 5)
    const firstDataSet = jsonData[randomFactNumber]
    const textDataSet = firstDataSet.text
    console.log(textDataSet)

    // output
    // add 1 to random number, since users would see Fact #0 as odd!
    document.getElementById("cat-fact-number").innerHTML = "<p>Cat Fact #" + (randomFactNumber + 1) + "</p>"
    document.getElementById("cat-fact").innerHTML = "<p>" + textDataSet + "</p>"
  } catch (error) {
    console.error(error)
  }
}