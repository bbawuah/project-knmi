import React, { useEffect, useState, useRef } from 'react'
import ee from '@google/earthengine'
import PropTypes from 'prop-types'

export const Map = ({ coordinates }) => {
  const googleMapRef = useRef()
  const dates = {
    dates: ['2020-01-01', '2020-01-30'],
  }
  useEffect(() => {
    ;(async () => {
      const data = await fetch('https://knmi-backend.herokuapp.com/mapId', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dates: ['2020-01-01', '2020-01-30'],
        }),
      })
      const json = await data.json()

      initialize(json.mapId, googleMapRef)
    })()
  }, [])

  const initialize = (mapid, el) => {
    // console.log(window.google)
    const embeddedMap = new window.google.maps.Map(el.current, {
      center: {
        lng: coordinates.longitude,
        lat: coordinates.latitude,
      },
      zoom: 5,
    })

    const tileSource = new ee.layers.EarthEngineTileSource({
      mapid,
    })

    const overlay = new ee.layers.ImageOverlay(tileSource)
    embeddedMap.overlayMapTypes.push(overlay)
  }

  return (
    <div
      className="small-map"
      id="google-map"
      ref={googleMapRef}
      style={{ height: '100%', width: '100%' }}
    />
  )
}

Map.propTypes = {
  coordinates: PropTypes.object.isRequired,
}
