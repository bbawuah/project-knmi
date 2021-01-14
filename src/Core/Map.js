import React, { useEffect, useState, useRef } from 'react'
import ee from '@google/earthengine'

export const Map = () => {
  const googleMapRef = useRef()
  const [mapId, setMapId] = useState()
  let map
  useEffect(() => {
    ;(async () => {
      const data = await fetch('http://localhost:3000/mapId', {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      const json = await data.json()
      setMapId(json.mapId)

      initialize(mapId, googleMapRef)
    })()
  }, [])

  const initialize = (mapid, el) => {
    console.log(window.google)
    const embeddedMap = new window.google.maps.Map(el.current, {
      center: { lng: 5.1, lat: 52.1 },
      zoom: 6,
    })

    console.log('test')

    const tileSource = new ee.layers.EarthEngineTileSource({
      mapid,
    })

    const overlay = new ee.layers.ImageOverlay(tileSource)
    embeddedMap.overlayMapTypes.push(overlay)
  }

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ height: '100vh', width: '100%' }}
    />
  )
}
