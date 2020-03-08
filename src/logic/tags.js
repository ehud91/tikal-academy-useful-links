/**
 * Tag Logic methods
 */
const Tags = () => {
  const changeTag = (tag, setTag) => {
    tag = tag === "all" ? "" : tag;
    setTag(tag);
  };

  const headerLinks = (tags, setTagLinks) => {
    let tempTags = [];
    Object.keys(tags).forEach(item => {
      tempTags.push({ tag: item, title: tags[item] });
    });
    setTagLinks(tempTags);
    return tempTags;
  };

  const getTagsMap = (source = []) => {
    let tempTags = {};
    source.map(src => {
      if (src.tag) {
        const tagName = src.tag.substr(1, src.tag.length);
        const tagNameCamelCase =
          tagName.substr(0, 1).toUpperCase() + tagName.substr(1);
        tempTags[tagName] = tagNameCamelCase;
      }
      return false;
    });
    return tempTags;
  };

  return {
    changeTag,
    headerLinks,
    getTagsMap
  };
};

export default Tags;
