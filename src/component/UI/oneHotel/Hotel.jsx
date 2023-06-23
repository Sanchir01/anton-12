import React from 'react'
import { useActions } from '../../../hooks/useActions'
import { useFavorites } from '../../../hooks/useFavorites'
import styles from './index.module.scss'

const Hotel = ({ data }) => {
	const { favorites } = useFavorites()
	const isExist = favorites.some(r => r.id === data.id)
	
	const { toggleFavorites } = useActions()

	return (

				<div className={styles.stroke}>
					<span>{data.name}</span>
					<span>{data.data}</span>
					<span>{data.rating}</span>
					<div className={styles.price}>
						<span>Цена</span>
						<span>{data.price}</span>
					</div>
					<button onClick={() => toggleFavorites(data)}>
						{isExist ? 'delete' : 'addToFavorites'}
					</button>
				</div> 
	)
}

export default Hotel
