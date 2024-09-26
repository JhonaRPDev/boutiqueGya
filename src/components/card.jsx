import PropTypes from 'prop-types';

const Card = ({ 
  title, 
  description, 
  imageUrl, 
  buttons, 
  className, 
  style 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md overflow-hidden
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:translate-y-[-5px]
        ${className || ''}
      `}
      style={style}
    >
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
        {description && <p className="text-gray-700 mb-4">{description}</p>}
        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`px-4 py-2 rounded ${button.className || 'bg-blue-500 text-white'}`}
              >
                {button.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      className: PropTypes.string
    })
  ),
  className: PropTypes.string,
  style: PropTypes.object
};

export default Card;