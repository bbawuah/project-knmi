import React, { useEffect, useState, useRef } from 'react'
import ee from '@google/earthengine'
import PropTypes from 'prop-types'

export const Map = ({ coordinates, zoomLevel }) => {
  const googleMapRef = useRef()
  useEffect(() => {
    ;(async () => {
      const data = await fetch('http://localhost:3000/mapId', {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      const json = await data.json()

      initialize(json.mapId, googleMapRef)
    })()
  }, [])

  // console.log(coordinates)

  const initialize = (mapid, el) => {
    // console.log(window.google)
    const embeddedMap = new window.google.maps.Map(el.current, {
      center: {
        lng: coordinates.longitude,
        lat: coordinates.latitude,
      },
      zoom: zoomLevel,
    })

    const tileSource = new ee.layers.EarthEngineTileSource({
      mapid,
    })

    const overlay = new ee.layers.ImageOverlay(tileSource)
    embeddedMap.overlayMapTypes.push(overlay)

    var opacity = 0.5
    const layer = new ee.addLayer(mapid, null, null, null, opacity)
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
  zoomLevel: PropTypes.number.isRequired,
}
