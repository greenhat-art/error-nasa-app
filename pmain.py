from flask import Flask,jsonify,request
from pdata import data

app= Flask(__name__)

@app.route("/")

def index():
    #return "Index"
    return jsonify({
        "Data":data,
        "message":"successful"
    }) 
@app.route("/planet")
def planet():
    name= request.args.get("name")
    planetdata= next(item for item in data if item["name"]==name)
    return jsonify({
        "Data":planetdata,
        "message":"successful"
    })

if __name__ == "__main__":
    app.run()
    