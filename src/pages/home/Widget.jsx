import React, { useEffect } from 'react';

const Widget = () => {
  useEffect(() => {
    // Cargar el script del widget de Doctoralia
    const script = document.createElement('script');
    script.id = 'zl-widget-s';
    script.src = '//platform.docplanner.com/js/widget.js';
    script.async = true;

    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg">
      <a
        id="zl-url"
        className="zl-url inline-block"
        href="https://www.doctoralia.com.mx/ivo-humberto-pineda-somodevilla/urologo/puebla"
        rel="nofollow"
        data-zlw-doctor="ivo-humberto-pineda-somodevilla"
        data-zlw-type="button_calendar_floating_medium"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="true"
        data-zlw-a11y-title="Widget de reserva de citas médicas"
      >
        Ivo Humberto Pineda Somodevilla - Doctoralia.com.mx
      </a>
    </div>
  );
};

export default Widget;