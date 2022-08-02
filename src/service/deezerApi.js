import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const deezerApiHeaders = {
    'X-RapidAPI-Key': '8e17a3f71cmshf15ad0b33996390p13fffdjsn2c3d0a8585e2',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
}

const baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: deezerApiHeaders });

export const deezerApi = createApi({
    reducerPath: 'deezerApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getArtist: builder.query({
            query: () => createRequest('/artist/{id}'),
        }),
        getArtistAlbum: builder.query({
            query: () => createRequest('/album/{id}'),
        }),
        getArtistTrack: builder.query({
            query: () => createRequest('/track/{id}'),
        }),
        getArtistPlaylist: builder.query({
            query: () => createRequest('/playlist/{id}'),
        }),
        getArtistRadio: builder.query({
            query: () => createRequest('/radio/{id}'),
        }),
        getArtistSearch: builder.query({
            query: () => createRequest('/search/artist?q={query}'),
        }),
        getArtistGenre: builder.query({
            query: () => createRequest('/genre/{id}'),
        }),
    })
})

export const {
  useGetArtistQuery,
  useGetArtistAlbumQuery,
  useGetArtistTrackQuery,
  useGetArtistPlaylistQuery,
  useGetArtistRadioQuery,
  useGetArtistSearchQuery,
  useGetArtistGenreQuery,
} = deezerApi;