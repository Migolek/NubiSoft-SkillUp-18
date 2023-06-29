import NubiLogo from '../../assets/logo_nubi.png';

export default function Introduction() {
  return (
    <>
      <section
        data-auto-animate
        data-background-image={NubiLogo}
        data-background-opacity="0.05"
        data-background-size="contain"
        data-background-position="center"
      ></section>
      <section
        data-auto-animate
        data-background-image={NubiLogo}
        data-background-opacity="0.05"
        data-background-size="contain"
      >
        <h1 className="r-fit-text">
          <strong>Angular 15/*</strong>
        </h1>
      </section>
      <section
        data-auto-animate
        data-background-image={NubiLogo}
        data-background-opacity="0.05"
        data-background-size="contain"
      >
        <h1 className="r-fit-text">
          <strong>Angular 15/*</strong>
        </h1>
        <h3 className="r-fit-text">przez pryzmat React&apos;owca</h3>
      </section>

      <section data-auto-animate>
        <h2 className="r-stack r-fit-text">Re-używalne mechanizmy</h2>
      </section>
      <section data-auto-animate>
        <h2 className="r-stack r-fit-text">Re-używalne mechanizmy</h2>
        <ul>
          <li>zarządzanie stanem komponentu</li>
        </ul>
      </section>
      <section data-auto-animate>
        <h2 className="r-stack r-fit-text">Re-używalne mechanizmy</h2>
        <ul>
          <li>zarządzanie stanem komponentu</li>
          <li>obsługa requestów HTTP</li>
        </ul>
      </section>
      <section data-auto-animate>
        <h2 className="r-fit-text r-fit-text">Re-używalne mechanizmy</h2>
        <ul>
          <li>zarządzanie stanem komponentu</li>
          <li>obsługa requestów HTTP</li>
          <li>obsługa cache&apos;u przy pomocy interceptor&apos;a</li>
        </ul>
      </section>
    </>
  );
}
