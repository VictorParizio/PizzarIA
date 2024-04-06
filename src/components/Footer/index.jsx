import "./styles.css";

export const Footer = () => {
  return (
    <footer>
      <ul class="links-utils">
        <li>
          <a
            href="https://www.linkedin.com/in/victorpariziobackend/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a href="https://github.com/VictorParizio" target="_blank">
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://portfolio-victor-parizio.vercel.app/"
            target="_blank"
          >
            Portfolio
          </a>
        </li>
      </ul>

      <p>
        Desenvolvido por <strong>Victor Parizio</strong>
      </p>

      <button class="topo"></button>
    </footer>
  );
};
