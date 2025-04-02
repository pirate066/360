var APP_DATA = {
  "scenes": [
    {
      "id": "0-ballroom",
      "name": "ballroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -3.0425896780540356,
        "pitch": 0.09940455802606252,
        "fov": 1.5785051123454943
      },
      "linkHotspots": [
        {
          "yaw": -3.055710257928032,
          "pitch": 0.17538942275009362,
          "rotation": 0,
          "target": "1-bricks"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bricks",
      "name": "bricks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 381,
      "initialViewParameters": {
        "yaw": 0.31848652796722376,
        "pitch": 0.01346528559595761,
        "fov": 1.5785051123454943
      },
      "linkHotspots": [
        {
          "yaw": 0.44393920936615494,
          "pitch": 0.09272502235524627,
          "rotation": 0,
          "target": "0-ballroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
