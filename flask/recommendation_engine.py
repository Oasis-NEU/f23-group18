import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os
from dotenv import load_dotenv #, dotenv_values

load_dotenv()

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

# Client manager
client_credentials_manager = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)

spotify = spotipy.Spotify(client_credentials_manager=client_credentials_manager)


# Gets the JSON object of the artist
def get_artist(artist_name):
    input_results = spotify.search(q='artist:' + artist_name, type='artist')
    items = input_results['artists']['items']

    # If there are any artists that exist with this search term, return the top result
    if len(items) > 0:
        artist = items[0]
        return artist
    else:
        print("Artist not found")

# Gets the URI of the artist's JSON object
def get_artist_uri(artist):
    return get_artist(artist)['uri']

# Gets the popularity of the artist
def get_artist_popularity(artist):
    return get_artist(artist)['popularity']    

# Gets the image url of the artist
def get_artist_image_url(artist):
    return get_artist(artist)['images'][0]['url']

# Given a list of artists, and a popularity score from 1-100, return a list of related artists
def get_recommended_artists(list_of_artists,max_popularity):

    list_of_artist_uris = []
    # gets the URI of each artist in list
    for artist in list_of_artists:
        artist_uri = get_artist_uri(artist)
        list_of_artist_uris.append(artist_uri)

    # API call
    # Given: list of artist URIS, number of artists to generate, country of origin, maximum popularity score
    # Returns: a JSON object of tracks that are recommended from the list of artists given.
    # Possibility of allowing users to input tracks or genres to find artists as well!
    recs = spotify.recommendations(seed_artists=list_of_artist_uris, seed_genres=None, seed_tracks=None, limit=100, country="US", max_popularity=max_popularity)

    #filters out repeats using set
    names_of_related_artists = set()
    # for each track in the list of tracks
    for n in range(len(recs['tracks'])):
        # get the name of the artist who made the track
        names_of_related_artists.add(recs['tracks'][n]['artists'][0]['name'])
    
    return names_of_related_artists

def recommend(list_of_artists, maximum_popularity):
    list_of_recommended_artists = get_recommended_artists(list_of_artists, maximum_popularity)
    return list_of_recommended_artists

# Recommends 5 artists that are related to the given artist
def recommend_call(artist, maximum_popularity):
    return list(recommend([artist],maximum_popularity))[0:5]





