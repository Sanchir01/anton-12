import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const URL_API = `https://648e0a572de8d0ea11e8857d.mockapi.io/hostel`

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Hotel'],
	baseQuery: fetchBaseQuery({
		baseUrl: URL_API
	}),
	endpoints: builder => ({
		getAll: builder.query({
			query: () => ''
		})
	})
})
