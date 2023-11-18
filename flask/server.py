from flask import Flask
import recommendation_engine

app = Flask(__name__)


@app.route("/artists")
def songs():
    five_recommended_songs = recommendation_engine.recommend_call("NewJeans", 80)
    five_recommended_songs_image_urls = [recommendation_engine.get_artist_image_url(x) for x in five_recommended_songs]
    return {
        "artists": five_recommended_songs, 
        "artist_image_urls":five_recommended_songs_image_urls
        }
    

if __name__ == "__main__":
    app.run()