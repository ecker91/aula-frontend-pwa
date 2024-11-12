import './Avatar.css';

const Avatar = (props) => {
  const [primeiroNome, segundoNome] = props.nome.split(' ');

  return (
    <div className="avatar_root">
      <strong>
        {segundoNome
          ? primeiroNome[0] + segundoNome[0]
          : primeiroNome[0]}
      </strong>
    </div>
  );
};

export default Avatar;
