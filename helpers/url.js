const getParent = (child, parent) => {
  let slug = child.slug;
  if (slug !== undefined) {
    parent.unshift(slug);
    if (child.parent.fields.slug !== 'home')
      getParent(child.parent.fields, parent);
  }
  return parent;
}

export default {
  urlBuilder(page) {
    let ancestors = getParent(page, []);
    return `/${ancestors.join('/')}`;
  },  
};