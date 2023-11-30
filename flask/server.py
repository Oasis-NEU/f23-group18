from flask import Flask, jsonify, request

from flask_cors import CORS
import recommendation_engine

app = Flask(__name__)
CORS(app)


@app.route("/artists", methods=['POST','GET'])
def songs():

    search_json = request.json  
    print(search_json)
    search_input = search_json['searchText']
    print(search_input)
    five_recommended_artists = recommendation_engine.recommend_call(search_input, (recommendation_engine.get_artist_popularity(search_input) - 20))
    five_recommended_artists_image_urls = [recommendation_engine.get_artist_image_url(artist) for artist in five_recommended_artists]
    artist_data = {
        "artists": five_recommended_artists, 
        "artist_image_urls":five_recommended_artists_image_urls
        }
    print(artist_data["artists"])
    return jsonify(artist_data)
    

    

if __name__ == "__main__":
    app.run(port=5000)