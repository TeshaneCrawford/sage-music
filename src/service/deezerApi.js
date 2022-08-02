import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const deezerApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_DEEZER_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_DEEZER_RAPIDAPI_HOST,
}

const createRequest = (url) => ({ url, headers: deezerApiHeaders });

export const deezerApi = createApi({
    reducerPath: 'deezerApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_DEEZER_API_URL }),
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