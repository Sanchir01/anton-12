import React from 'react'
import { useFavorites } from '../../../hooks/useFavorites'
import styles from './index.module.scss'

const FavoritesList = () => {
   const { favorites } = useFavorites()
   console.log(favorites)
  return (
    <div className={styles.app}>{favorites.map(item => <span>{item.name}</span>)}</div>
  )
}

export default FavoritesList