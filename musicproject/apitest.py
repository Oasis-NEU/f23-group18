import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import os
from dotenv import load_dotenv #, dotenv_values

load_dotenv()

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

#client manager
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


# figure out how to get the information from the front end into a list, let program work its magic

korean_pop = ["NewJeans" , "LE SSERAFIM" , "BLACKPINK"]
american_pop = ["Taylor Swift" , "Lady Gaga" , "Justin Bieber"]
rap = ["Eminem", "Drake", "50 Cent"]

def recommend(list_of_artists, maximum_popularity):
    list_of_recommended_artists = get_recommended_artists(list_of_artists, maximum_popularity)

    print("Given this list of artists: " + ", ".join(list_of_artists) + "\n")
    print("Here are some recommended artists: " + ", ".join(list_of_recommended_artists)  + "\n")

#recommend (list of artists, max popularity)
recommend(korean_pop, 50)
recommend(american_pop, 30)
recommend(rap, 20)




