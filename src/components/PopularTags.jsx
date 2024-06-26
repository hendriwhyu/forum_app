import React, { useState } from 'react';
import PropTypes from 'prop-types';

function PopularTags({ tags, clickTag, unclickTag }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (tag, index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      unclickTag(tag);
    } else {
      setActiveIndex(index);
      clickTag(tag);
    }
  };
  return (
    <div className="flex flex-col my-3 gap-2 max-w-xl">
      <p>Kategori Popular</p>
      <div className="flex flex-row gap-3 flex-wrap">
        {tags?.values?.map((tag, index) => (
          <button
            type="button"
            key={tag.id}
            className={`btn ${
              activeIndex === index ? 'btn-primary' : 'btn-outline btn-primary'
            } btn-sm text-white text-sm font-medium align-center`}
            onClick={() => handleButtonClick(tag, index)}
          >
            {`#${tag}`}
          </button>
        ))}
      </div>
    </div>
  );
}

const tagShape = {
  values: PropTypes.array.isRequired,
  selectedValue: PropTypes.string,
};

PopularTags.propTypes = {
  tags: PropTypes.shape(tagShape).isRequired,
  clickTag: PropTypes.func.isRequired,
  unclickTag: PropTypes.func.isRequired,
};

export default PopularTags;
