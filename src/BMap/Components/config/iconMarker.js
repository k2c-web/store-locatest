export default {
  marker: {
    type: 'default',
    default: {
      url: '/icons/marker.png',
      size: { width: 26, height: 32 },
      retina: false,
    },
    hover: { url: '/icons/marker-selected.png', size: { width: 26, height: 32 }, retina: false },
    selected: { url: '/icons/marker-selected.png', size: { width: 26, height: 32 }, retina: false },
  },
  position: {
    default: {
      url: '/icons/my-position.png',
      size: { width: 30, height: 30 },
      retina: false,
    },
  },
  cluster: {
    default: { url: '/icons/cluster.png', size: { width: 30, height: 30 }, retina: false },
    hover: { url: '', size: '', retina: false },
    selected: { url: '', size: '', retina: false },
  },
}
