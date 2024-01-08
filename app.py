import os
from flask import Flask, render_template, request
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.resnet50 import preprocess_input

app = Flask(__name__)
# Load your pre-trained model
model = load_model('efficientnetb3-Skin Cancer-91.60.h5')


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/predict', methods=['POST'])
def predict():
    message = ""
    if request.method == 'POST':
        print("ok")
        if 'image' not in request.files:
            return render_template('index.html', message='No file part')

        predictionChoice = {0: 'Tumor', 1: 'Cancer'}
        name = request.form.get('name')
        age = request.form.get('age')
        gender = request.form.get('gender')
        phone = request.form.get('phone')
        email = request.form.get('email')
        location = request.form.get('location')
        image_file = request.files['image']

        if image_file.filename == '':
            return render_template('index.html', message='No selected file')

        if image_file:
            image_path = os.path.join('static/uploaded', image_file.filename)
            image_file.save(image_path)
            data = {
                'name': name,
                'age': age,
                'gender': gender,
                'phone': phone,
                'email': email,
                'location': location,
                'path': image_path
            }
            print(data)

            # Load and preprocess the uploaded image
            image = load_img(image_path, target_size=(224, 224))
            image_array = img_to_array(image)
            image_array = preprocess_input(image_array[np.newaxis, ...])

            # Make predictions
            predictions = model.predict(image_array)
            predicted_class = np.argmax(predictions)
            if predicted_class == 0:
                message = "NEGATIVE"
            else:
                message = "POSITIVE"

            return render_template('output.html', data=data, message=message)

    return render_template('index.html')
# @app.route("/output", methods=['GET','POST'])
# def output():
#     return render_template('output.html')


if __name__ == '__main__':
    app.run(debug=True)
