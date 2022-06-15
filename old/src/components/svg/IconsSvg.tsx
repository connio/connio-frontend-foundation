import Icon from "@ant-design/icons";

interface SvgProps {
  width?: number;
  height?: number;
}

const defaultWidth: number = 16;
const defaultHeight: number = 16;

/*
 These components have been created using https://tools.w3cub.com/svg-to-jsx
 See also https://icon-icons.com/ and https://ant.design/components/icon/
*/

const FlowIcon = () => (
  <svg height={16} viewBox="0 0 32 32" width={16}>
    <path d="M22 4v3H10V4H2v8h8V9h7.023A4.946 4.946 0 0016 12v8a3.004 3.004 0 01-3 3h-3v-3H2v8h8v-3h3a5.006 5.006 0 005-5v-8a2.998 2.998 0 012.997-3H22v3h8V4zM8 10H4V6h4zm0 16H4v-4h4zm20-16h-4V6h4z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const CircuitIcon = () => (
  <svg height={16} viewBox="0 0 32 32" width={16}>
    <path d="M10 15H22V17H10z" />
    <path d="M8.7 6.285A2.966 2.966 0 009 5a3 3 0 10-3 3 2.96 2.96 0 001.285-.3L10 10.413V13h2V9.586zM6 6a1 1 0 111-1 1 1 0 01-1 1zM19 5a3 3 0 10-4 2.815V13h2V7.816A2.996 2.996 0 0019 5zm-3 1a1 1 0 111-1 1 1 0 01-1 1zM26 2a3.003 3.003 0 00-3 3 2.966 2.966 0 00.3 1.285l-3.3 3.3V13h2v-2.586L24.715 7.7A2.96 2.96 0 0026 8a3 3 0 000-6zm0 4a1 1 0 111-1 1 1 0 01-1 1zM12 19h-2v2.586L7.285 24.3A2.96 2.96 0 006 24a3 3 0 103 3 2.966 2.966 0 00-.3-1.285l3.3-3.3zm-6 9a1 1 0 111-1 1 1 0 01-1 1zM17 24.184V19h-2v5.184a3 3 0 102 0zM16 28a1 1 0 111-1 1 1 0 01-1 1zM26 24a2.96 2.96 0 00-1.285.3L22 21.587V19h-2v3.414l3.3 3.3A2.966 2.966 0 0023 27a3 3 0 103-3zm0 4a1 1 0 111-1 1 1 0 01-1 1z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const DeviceIcon = () => (
  <svg height={16} viewBox="0 0 32 32" width={16}>
    <path d="M30 19h-4v-4h-2v9H8V8h9V6h-4V2h-2v4H8a2.002 2.002 0 00-2 2v3H2v2h4v6H2v2h4v3a2.002 2.002 0 002 2h3v4h2v-4h6v4h2v-4h3a2.003 2.003 0 002-2v-3h4z" />
    <path d="M21 21H11V11h10zm-8-2h6v-6h-6zM31 13h-2A10.012 10.012 0 0019 3V1a12.013 12.013 0 0112 12z" />
    <path d="M26 13h-2a5.006 5.006 0 00-5-5V6a7.008 7.008 0 017 7z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const RobotArmIcon = () => (
  <svg width={18} height={18} viewBox="0 0 32 32">
    <path fill="none" stroke="#cbbb2e" strokeWidth={6} d="M19 5l-8 8" />
    <rect
      fill="#cbbb2e"
      width={8}
      height={17}
      x={-13}
      y={11}
      ry={0}
      transform="scale(-1 1)"
    />
    <path fill="#d6c84a" d="M13 26c1 0 1 1 1 1v2H4v-2c0-1 1-1 1-1z" />
    <path fill="#4f4f4f" d="M15 27c1 0 1 1 1 1v2H2v-2c0-1 1-1 1-1z" />
    <path
      fill="none"
      stroke="#cbbb2e"
      strokeLinecap="square"
      strokeWidth={4}
      d="M19 5l4 4"
    />
    <rect
      opacity={0.2}
      width={8}
      height={8}
      x={-23}
      y={2}
      ry={4}
      transform="scale(-1 1)"
    />
    <rect
      opacity={0.2}
      width={12}
      height={12}
      x={-15}
      y={10}
      ry={6}
      transform="scale(-1 1)"
    />
    <rect
      fill="#d6c84a"
      width={12}
      height={12}
      x={-15}
      y={9}
      ry={6}
      transform="scale(-1 1)"
    />
    <rect
      fill="#4f4f4f"
      width={8}
      height={8}
      x={-13}
      y={11}
      ry={4}
      transform="scale(-1 1)"
    />
    <rect
      fill="#fff"
      opacity={0.1}
      width={6}
      height={6}
      x={-12}
      y={12}
      ry={3}
      transform="scale(-1 1)"
    />
    <rect
      fill="#d6c84a"
      width={8}
      height={8}
      x={-23}
      y={1}
      ry={4}
      transform="scale(-1 1)"
    />
    <path
      fill="none"
      stroke="#4f4f4f"
      strokeLinecap="round"
      strokeWidth={2}
      d="M25 16l-2-1v-4l2-2h4l1 2"
    />
    <rect
      fill="#4f4f4f"
      width={4}
      height={4}
      x={-21}
      y={3}
      ry={2}
      transform="scale(-1 1)"
    />
    <path
      fill="#f9f9f9"
      opacity={0.2}
      d="M9 9c-3.324 0-6 2.676-6 6 0 .169.012.335.025.5C3.278 12.412 5.845 10 9 10s5.721 2.412 5.975 5.5c.013-.165.025-.331.025-.5 0-3.324-2.676-6-6-6zM19 1c-2.216 0-4 1.784-4 4 0 .171.028.335.049.5A3.978 3.978 0 0119 2a3.978 3.978 0 013.951 3.5c.02-.165.049-.329.049-.5 0-2.216-1.784-4-4-4z"
    />
    <path
      fill="#fff"
      opacity={0.1}
      d="M3 27s-1 0-1 1v1c0-1 1-1 1-1h12c1 0 1 1 1 1v-1s0-1-1-1H3z"
    />
  </svg>
);

const IndoorsIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24">
    <path d="M10 5v5H9V5H5v8h4v-1h1v5H9v-3H5v5h7v-2h1v2h6v-2h2v4H3V3h18v12h-2v-5h-6v5h-1V9h7V5h-9z" />
  </svg>
);

const MapIcon = () => (
  <svg width={16} height={16} viewBox="0 0 225.165 225.165">
    <path d="M105.808 138.289c0-17.027-13.85-30.872-30.872-30.872s-30.867 13.85-30.867 30.872 13.85 30.877 30.867 30.877c17.026 0 30.872-13.85 30.872-30.877zM74.936 159.13c-11.487 0-20.831-9.349-20.831-20.841s9.344-20.836 20.831-20.836c11.492 0 20.836 9.349 20.836 20.836-.001 11.497-9.345 20.841-20.836 20.841z" />
    <circle cx={74.936} cy={138.289} r={6.248} />
    <path d="M212.942.463a5.014 5.014 0 00-5.354.733l-59.195 50.223h-71.61L17.572 1.19a5.017 5.017 0 00-8.26 3.829v163.7c0 1.475.647 2.87 1.771 3.829l60.605 51.422c.241.206.522.306.783.457.216.125.401.276.637.366a5.004 5.004 0 001.827.371h75.299c.627 0 1.245-.135 1.832-.371.226-.09.411-.241.622-.361.266-.156.552-.261.793-.462l60.6-51.422a5.02 5.02 0 001.771-3.829V5.014a5.022 5.022 0 00-2.91-4.551zM74.936 184.698a5.017 5.017 0 00-5.018 5.018v19.586l-50.569-42.906V15.854L69.917 58.76v28.107c0 2.77 2.243 5.018 5.018 5.018s5.018-2.248 5.018-5.018V61.46h65.262v153.669H79.954v-25.407a5.018 5.018 0 00-5.018-5.024zm130.88-18.302l-50.564 42.906V58.76l50.564-42.906v150.542z" />
  </svg>
);

const FlowchartIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 3a3 3 0 110 6h-3a3 3 0 01-2.829-2H11c-1.1 0-2 .9-2 2v.171a3 3 0 010 5.658V15c0 1.1.9 2 2 2h1.17A3.003 3.003 0 0115 15h3a3 3 0 110 6h-3a3 3 0 01-2.829-2H11c-2.21 0-4-1.79-4-4H5a3 3 0 110-6h2c0-2.21 1.79-4 4-4h1.17A3.003 3.003 0 0115 3h3zm0 14h-3a1 1 0 000 2h3a1 1 0 000-2zM8 11H5a1 1 0 000 2h3a1 1 0 000-2zm10-6h-3a1 1 0 000 2h3a1 1 0 000-2z" />
  </svg>
);

const ModellingIcon = () => (
  <svg width={18} height={18} viewBox="0 0 64 64">
    <style>
      {
        ".st0{display:none}.st2{display:inline}.st3,.st4,.st5,.st6,.st8{fill:none;stroke:#4c5159;stroke-width:2;stroke-miterlimit:10}.st4{display:inline}.st5,.st6,.st8{stroke-dasharray:1.9857,1.9857}.st6,.st8{display:inline;stroke-dasharray:2}.st8{stroke-dasharray:3}.st10{fill:#4c5159}.st11{font-family:&apos;Montserrat-Bold&apos;}.st12{font-size:7px}"
      }
    </style>
    <g id="bg" className="st0">
      <path
        id="XMLID_119_"
        display="inline"
        fill="#fff"
        d="M-218 -268.2H282V332.09999999999997H-218z"
      />
    </g>
    <g id="icons">
      <g id="XMLID_72_" className="st0">
        <g id="XMLID_8_" className="st2">
          <path
            id="XMLID_59_"
            className="st3"
            d="M26.4 41.1V16.6l2.9-4.5c.1-.2.4-.2.5 0l2.8 4.5v24.6"
          />
          <path id="XMLID_4_" className="st3" d="M26.1 17.7L32.9 17.7" />
        </g>
        <g id="XMLID_746_" className="st2">
          <path
            id="XMLID_58_"
            className="st3"
            d="M15 41.1L15 18.8 17.8 15.6 20.6 18.8 20.6 41.1"
          />
          <path id="XMLID_743_" className="st3" d="M17.8 16.6L17.8 13" />
          <path id="XMLID_742_" className="st3" d="M20.7 38.3L14.9 38.3" />
          <path id="XMLID_736_" className="st3" d="M20.7 23L14.9 23" />
        </g>
        <g id="XMLID_40_" className="st2">
          <path
            id="XMLID_9_"
            className="st3"
            d="M55.4 52.1H8.6c-.1 0-.2-.1-.2-.2v-8.5c0-.1.1-.2.2-.2h46.8c.1 0 .2.1.2.2v8.5c0 .1-.1.2-.2.2z"
          />
          <path id="XMLID_14_" className="st3" d="M12.9 43.2L12.9 46.9" />
          <path id="XMLID_13_" className="st3" d="M17.6 43.2L17.6 46.9" />
          <path id="XMLID_15_" className="st3" d="M22.4 43.2L22.4 46.9" />
          <path id="XMLID_16_" className="st3" d="M27.1 43.2L27.1 46.9" />
          <path id="XMLID_17_" className="st3" d="M31.8 43.2L31.8 46.9" />
          <path id="XMLID_21_" className="st3" d="M36.5 43.2L36.5 46.9" />
          <path id="XMLID_25_" className="st3" d="M41.2 43.2L41.2 46.9" />
          <path id="XMLID_29_" className="st3" d="M45.9 43.2L45.9 46.9" />
          <path id="XMLID_36_" className="st3" d="M50.6 43.2L50.6 46.9" />
        </g>
        <g id="XMLID_64_" className="st2">
          <path id="XMLID_116_" className="st3" d="M43.6 12.5L43.6 21.2" />
          <circle id="XMLID_115_" className="st3" cx={43.6} cy={22.5} r={1.3} />
          <path
            id="XMLID_111_"
            className="st3"
            d="M38.8 41.1V29c0-.1.1-.2.2-.2h9.2c.1 0 .2.1.2.2v12.1"
          />
          <path
            id="XMLID_62_"
            className="st3"
            d="M43.1 12.2h-1.4s-1 4.2-3.6 7.2l2 9.3"
          />
          <path
            id="XMLID_65_"
            className="st3"
            d="M44.1 12.2h1.4s1 4.2 3.6 7.2l-1.9 9.3"
          />
        </g>
      </g>
      <g id="XMLID_100_" className="st0">
        <path
          id="XMLID_84_"
          className="st4"
          d="M29.7 52.2H34.4V54.900000000000006H29.7z"
        />
        <g id="XMLID_78_" className="st2">
          <path
            id="XMLID_85_"
            className="st3"
            d="M39.4 52.2L24.6 52.2 23.6 50 23.6 43.7 40.4 43.7 40.4 50z"
          />
          <path
            id="XMLID_81_"
            className="st3"
            d="M44 30.8c0-6.6-5.3-11.9-11.9-11.9-6.6 0-11.9 5.3-11.9 11.9 0 4.2 2.2 7.9 5.4 10v3h12.8v-3c3.4-2.2 5.6-5.9 5.6-10z"
          />
          <path id="XMLID_80_" className="st3" d="M23.6 47.9L30.9 47.9" />
          <path
            id="XMLID_74_"
            className="st3"
            d="M26.6 30.2L30.2 33.8 37.4 26.6"
          />
          <g id="XMLID_90_">
            <path
              id="XMLID_86_"
              className="st3"
              d="M43.1 46l2.7 2 3.3-3.3-4.5-6c.8-1.3 1.5-2.8 1.8-4.4l7.4-1.1v-4.7l-7.4-1.1c-.4-1.6-1-3-1.8-4.4l4.5-6-3.3-3.3-6 4.5c-1.3-.8-2.8-1.4-4.4-1.8L34.3 9h-4.7l-1.1 7.4c-1.6.4-3 1-4.3 1.8l-6-4.5-3.2 3.5 4.5 6c-.8 1.3-1.5 2.8-1.8 4.4l-7.4 1.1v4.7l7.4 1.1c.4 1.6 1 3 1.8 4.4l-4.5 6 3.3 3.3 2.7-2"
            />
          </g>
        </g>
      </g>
      <g id="XMLID_98_" className="st0">
        <g id="XMLID_82_" className="st2">
          <path id="XMLID_92_" className="st3" d="M32 21.7L32 34.1" />
          <circle id="XMLID_91_" className="st3" cx={32} cy={35.9} r={1.9} />
          <path
            id="XMLID_89_"
            className="st3"
            d="M38.8 53.2v-8.1c0-.2-.1-.3-.3-.3h-13c-.2 0-.3.1-.3.3v8.1"
          />
          <path
            id="XMLID_88_"
            className="st3"
            d="M32.7 21.3h2s1.4 6 5.1 10.2l-2.9 13.3"
          />
          <path
            id="XMLID_87_"
            className="st3"
            d="M31.3 21.3h-2s-1.4 6-5.1 10.2l2.7 13.3"
          />
        </g>
        <g id="XMLID_147_" className="st2">
          <path
            id="XMLID_134_"
            className="st3"
            d="M29.9 10.8H34.699999999999996V15.600000000000001H29.9z"
          />
          <path
            id="XMLID_135_"
            className="st3"
            d="M14.4 24.5H19.2V29.3H14.4z"
          />
          <path
            id="XMLID_136_"
            className="st3"
            d="M16.8 24.5c0-6.2 5.1-11.3 11.3-11.3h1.8"
          />
          <path id="XMLID_97_" className="st3" d="M44.7 24.5H49.5V29.3H44.7z" />
          <path
            id="XMLID_95_"
            className="st3"
            d="M47.1 24.5c0-6.2-5.1-11.3-11.3-11.3H34"
          />
          <path id="XMLID_138_" className="st3" d="M34.7 13.2L50.7 13.2" />
          <path id="XMLID_94_" className="st3" d="M13.3 13.2L29.3 13.2" />
          <circle id="XMLID_140_" className="st3" cx={52.6} cy={13.2} r={1.9} />
          <circle id="XMLID_142_" className="st3" cx={11.4} cy={13.2} r={1.9} />
        </g>
      </g>
      <g id="XMLID_132_">
        <g id="XMLID_113_">
          <circle id="XMLID_105_" className="st3" cx={32.1} cy={18.4} r={3.6} />
          <path
            id="XMLID_108_"
            className="st3"
            d="M30.6 15.4V9.7c0-.1.1-.1.1-.1h2.7c.1 0 .1.1.1.1v5.7"
          />
          <path
            id="XMLID_106_"
            className="st3"
            d="M12.2 54.3l-.5-4.6 16.9-29.2 3.4 2L23.6 37l-1.9 1.3-9.3 16c0 .1-.1.1-.2 0z"
          />
          <path
            id="XMLID_110_"
            className="st3"
            d="M51.8 54.3l.5-4.6-16.9-29.2-3.4 2L40.4 37l1.9 1.3 9.3 16c0 .1.1.1.2 0z"
          />
          <path id="XMLID_112_" className="st3" d="M24.4 34.5L39.6 34.5" />
          <path id="XMLID_109_" className="st3" d="M19.8 34.5L15 34.5" />
          <path id="XMLID_114_" className="st3" d="M15 31.7L15 37.3" />
          <path id="XMLID_117_" className="st3" d="M31.1 18.4L33.4 18.4" />
        </g>
        <path id="XMLID_118_" className="st5" d="M21 44.3L43.3 44.3" />
      </g>
      <g id="XMLID_146_" className="st0">
        <circle id="XMLID_121_" className="st4" cx={32} cy={32} r={2.3} />
        <circle id="XMLID_124_" className="st4" cx={32} cy={32} r={12.8} />
        <circle id="XMLID_144_" className="st4" cx={32} cy={32} r={17.2} />
        <circle id="XMLID_145_" className="st6" cx={32} cy={32} r={21.6} />
        <path
          id="XMLID_137_"
          className="st4"
          d="M29.7 44.3L29.7 32 22.1 40.1"
        />
        <path
          id="XMLID_139_"
          className="st4"
          d="M19.7 29.8L32 29.7 23.8 22.2"
        />
        <path
          id="XMLID_141_"
          className="st4"
          d="M34.1 19.7L34.3 32 41.7 23.7"
        />
        <path
          id="XMLID_143_"
          className="st4"
          d="M44.3 33.9L32.1 34.3 40.4 41.6"
        />
      </g>
      <g id="XMLID_163_" className="st0">
        <circle id="XMLID_149_" className="st4" cx={31.8} cy={39.6} r={1.5} />
        <circle id="XMLID_153_" className="st4" cx={31.8} cy={39.6} r={6.7} />
        <circle id="XMLID_155_" className="st4" cx={31.8} cy={39.6} r={9.6} />
        <path
          id="XMLID_157_"
          className="st4"
          d="M39.4 53.1H24.2l-2-12.5 2-18.5c0-.1.1-.2.2-.2h14.8c.1 0 .2.1.2.2l2 18.5-2 12.5z"
        />
        <path
          id="XMLID_159_"
          className="st4"
          d="M42.8 27.4H53c.2 0 .3.1.3.3v25c0 .2-.1.3-.3.3H10.6c-.2 0-.3-.1-.3-.3v-25c0-.2.1-.3.3-.3h9.8"
        />
        <path id="XMLID_160_" className="st4" d="M23.4 25.4L39.9 25.4" />
        <path id="XMLID_161_" className="st4" d="M14.4 32.1L16.8 32.1" />
        <path id="XMLID_162_" className="st4" d="M10.3 47L20.8 47" />
        <path id="XMLID_158_" className="st4" d="M42.5 47L53.8 47" />
        <path id="XMLID_164_" className="st4" d="M11.7 25.4L17.7 25.4" />
        <path
          id="XMLID_166_"
          className="st4"
          d="M45.1 27.4v-2.8c0-.1.1-.2.2-.2h4.8c.1 0 .2.1.2.2v2.8"
        />
        <path id="XMLID_255_" className="st4" d="M32 11.9L32 15" />
        <path id="XMLID_252_" className="st4" d="M40 10.9L36.9 16.3" />
        <path id="XMLID_257_" className="st4" d="M43.6 18.1L40.6 19.9" />
        <path id="XMLID_265_" className="st4" d="M20.8 18.4L23.4 19.9" />
        <path id="XMLID_268_" className="st4" d="M24 10.9L27.1 16.3" />
      </g>
      <g id="XMLID_217_" className="st0">
        <g id="XMLID_170_" className="st2">
          <path
            id="XMLID_213_"
            className="st3"
            d="M18.6 52.5v-41c0-.1-.1-.2-.2-.2H11c-.1 0-.2.1-.2.2v41c0 .1.1.2.2.2h7.4c.1 0 .2-.1.2-.2z"
          />
          <path id="XMLID_212_" className="st3" d="M10.8 15.3L14 15.3" />
          <path id="XMLID_211_" className="st3" d="M10.8 19.4L14 19.4" />
          <path id="XMLID_210_" className="st3" d="M10.8 23.5L14 23.5" />
          <path id="XMLID_209_" className="st3" d="M10.8 27.7L14 27.7" />
          <path id="XMLID_208_" className="st3" d="M10.8 31.8L14 31.8" />
          <path id="XMLID_207_" className="st3" d="M10.8 36L14 36" />
          <path id="XMLID_206_" className="st3" d="M10.8 40.1L14 40.1" />
          <path id="XMLID_205_" className="st3" d="M10.8 44.2L14 44.2" />
          <path id="XMLID_204_" className="st3" d="M10.8 48.4L14 48.4" />
        </g>
        <g id="XMLID_176_" className="st2">
          <g id="XMLID_175_">
            <path
              id="XMLID_214_"
              className="st3"
              d="M20.8 47H22l.6-4c.8-.2 1.6-.5 2.4-1l3.2 2.4 1.8-1.8-2.4-3.2c.4-.7.8-1.5 1-2.4l4-.6v-2.5l-4-.6c-.2-.8-.5-1.6-1-2.4l2.4-3.2-1.8-1.8-3.2 2.6c-.7-.4-1.5-.8-2.4-1l-.6-4h-1.3"
            />
            <path
              id="XMLID_177_"
              className="st3"
              d="M20.8 31.7c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6"
            />
          </g>
          <path
            id="XMLID_174_"
            className="st3"
            d="M53.2 49.3c0-4.6-6.8-3.4-6.8-3.4V11.7h3.4c1.9 0 3.4 1.5 3.4 3.4v34.2z"
          />
          <path id="XMLID_172_" className="st3" d="M20.8 16.8L43.3 16.8" />
          <path
            id="XMLID_171_"
            className="st3"
            d="M20.8 52.7h28.5c2.1 0 3.8-1.7 3.8-3.8v-5.4"
          />
          <path
            id="XMLID_215_"
            d="M32.4 23.7c3 3 4.8 7 4.8 11.5s-1.8 8.6-4.8 11.5"
            fill="none"
            stroke="#4c5159"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeDasharray={2}
          />
        </g>
      </g>
      <g id="XMLID_239_" className="st0">
        <path
          id="XMLID_218_"
          className="st4"
          d="M42.5 47.2H12.8c-.1 0-.2-.1-.2-.2V29.7c0-.1.1-.2.2-.2h29.6c.1 0 .2.1.2.2V47c.1.1 0 .2-.1.2z"
        />
        <path
          id="XMLID_233_"
          className="st4"
          d="M36.4 39.9h-12c-.1 0-.2-.1-.2-.2v-6.9c0-.1.1-.2.2-.2h12c.1 0 .2.1.2.2v6.9c0 .1-.1.2-.2.2z"
        />
        <path
          id="XMLID_220_"
          className="st4"
          d="M38.8 47.1v4.6c0 .1-.1.2-.2.2H16.7c-.1 0-.2-.1-.2-.2v-4.6"
        />
        <circle id="XMLID_219_" className="st4" cx={18.5} cy={20.7} r={8.7} />
        <circle id="XMLID_225_" className="st4" cx={38} cy={20.7} r={8.7} />
        <path
          id="XMLID_238_"
          className="st4"
          d="M38 15.2c1.5 0 2.9.6 3.9 1.6s1.6 2.4 1.6 3.9"
        />
        <path
          id="XMLID_237_"
          className="st4"
          d="M18.2 15.2c1.5 0 2.9.6 3.9 1.6s1.6 2.4 1.6 3.9"
        />
        <path
          id="XMLID_226_"
          className="st4"
          d="M54 45.2h-6.4c-.1 0-.1-.1-.1-.1V31.3c0-.1.1-.1.1-.1H54c.1 0 .1.1.1.1v13.8c.1 0 0 .1-.1.1z"
        />
        <path id="XMLID_229_" className="st4" d="M46.8 41.1L42.7 41.1" />
        <path id="XMLID_228_" className="st4" d="M42.7 35.7L46.8 35.7" />
        <path id="XMLID_230_" className="st4" d="M49.2 34.2L52.5 34.2" />
        <path id="XMLID_227_" className="st4" d="M49.1 38.2L52.4 38.2" />
        <path id="XMLID_231_" className="st4" d="M49 42.1L52.3 42.1" />
        <path id="XMLID_236_" className="st4" d="M22.4 43.6L30.8 43.6" />
        <path id="XMLID_234_" className="st4" d="M20.5 43.6L16.8 43.6" />
      </g>
      <g id="XMLID_251_" className="st0">
        <path id="XMLID_247_" className="st4" d="M47.8 54.3L50.7 54.3" />
        <path id="XMLID_253_" className="st4" d="M13.3 54.3L45.8 54.3" />
        <g id="XMLID_242_" className="st2">
          <path
            id="XMLID_241_"
            className="st3"
            d="M40.1 36.5H23.9c-.1 0-.2-.1-.2-.2v-3.5c0-.1.1-.2.2-.2h16.2c.1 0 .2.1.2.2v3.5c0 .1-.1.2-.2.2z"
          />
          <path
            id="XMLID_249_"
            className="st3"
            d="M38.4 30.3v-7c0-.2-.1-.3-.3-.3H25.9c-.2 0-.3.1-.3.3v7"
          />
          <path
            id="XMLID_244_"
            className="st3"
            d="M27.2 23.3c0-2.7 2.2-4.8 4.8-4.8 2.7 0 4.8 2.2 4.8 4.8"
          />
          <path id="XMLID_245_" className="st3" d="M26.1 36.9L23.9 54.4" />
          <path id="XMLID_243_" className="st3" d="M38 36.9L40.2 54.4" />
          <path id="XMLID_248_" className="st3" d="M24.9 45.5L33.8 36.6" />
          <path id="XMLID_246_" className="st3" d="M29.6 54.3L38.9 45" />
        </g>
        <path
          id="XMLID_250_"
          className="st6"
          d="M19.2 40.6c-3.3-3.3-5.3-7.8-5.3-12.8 0-5 2-9.5 5.3-12.8C22.5 11.7 27 9.6 32 9.6c5 0 9.5 2 12.8 5.3 3.3 3.3 5.3 7.8 5.3 12.8 0 5-2 9.5-5.3 12.8"
        />
        <circle id="XMLID_254_" className="st4" cx={32} cy={27.5} r={2.5} />
      </g>
      <g id="XMLID_258_" className="st0">
        <path
          id="XMLID_264_"
          className="st4"
          d="M39.9 51.2L24.1 51.2 23 49 23 42.2 41 42.2 41 48.9z"
        />
        <path
          id="XMLID_263_"
          className="st4"
          d="M44.7 28.4c0-7-5.7-12.7-12.7-12.7-7 0-12.7 5.7-12.7 12.7 0 4.5 2.3 8.4 5.8 10.6v3.2h13.7V39c3.6-2.2 5.9-6.2 5.9-10.6z"
        />
        <path id="XMLID_262_" className="st4" d="M23 46.7L30.8 46.7" />
        <path
          id="XMLID_167_"
          className="st4"
          d="M34.5 51.5L34.5 54.1 29.5 54.1 29.5 51.5"
        />
        <path
          id="XMLID_261_"
          className="st8"
          d="M19.4 41.3c-3.5-3.3-5.6-8-5.6-13.2C13.8 18 22 9.9 32 9.9c10.1 0 18.2 8.2 18.2 18.2 0 5.3-2.3 10.1-5.9 13.4"
        />
        <path
          id="XMLID_260_"
          className="st4"
          d="M31.3 15.7v10c1.8 0 3.2 1.5 3.2 3.2 0 1.8-1.5 3.2-3.2 3.2v10"
        />
        <path id="XMLID_270_" className="st4" d="M31.3 21.4L36.3 16.4" />
        <path id="XMLID_259_" className="st4" d="M33 26.1L40.4 18.8" />
        <path id="XMLID_272_" className="st4" d="M31.6 33.9L43.1 22.4" />
        <path id="XMLID_273_" className="st4" d="M31.7 40.3L44.4 27.5" />
      </g>
      <g id="XMLID_266_" className="st0">
        <path
          id="XMLID_283_"
          className="st4"
          d="M18.6 16.1H48.900000000000006V41.900000000000006H18.6z"
        />
        <path id="XMLID_282_" className="st4" d="M18.6 12.5L18.6 45.2" />
        <path id="XMLID_279_" className="st4" d="M14.4 33.6L14.4 41.1" />
        <path id="XMLID_278_" className="st4" d="M14.4 17.6L14.4 25.1" />
        <path id="XMLID_277_" className="st4" d="M22.2 22.1L22.2 19 24.9 19" />
        <path
          id="XMLID_276_"
          className="st4"
          d="M45.4 35.7L45.4 38.7 42.7 38.7"
        />
        <g id="XMLID_269_" className="st2">
          <path
            id="XMLID_471_"
            className="st3"
            d="M50.5 49.4v1.5l-3.2.6H16.9l-2.3-1.1c-.2-.1-.2-.3 0-.4l2.3-1.1h30.4l3.2.5z"
          />
        </g>
        <path
          id="XMLID_275_"
          className="st4"
          d="M53.4 45.2H10.6c-.1 0-.2-.1-.2-.2V12.7c0-.1.1-.2.2-.2h42.8c.1 0 .2.1.2.2V45c0 .1-.1.2-.2.2z"
        />
        <circle id="XMLID_286_" className="st4" cx={14.4} cy={29.5} r={1.7} />
      </g>
      <g id="XMLID_292_" className="st0">
        <path
          id="XMLID_294_"
          className="st4"
          d="M28.2 37.9V25.1l3.5-5.5c.1-.3.5-.3.7 0l3.4 5.5v12.8"
        />
        <path
          id="XMLID_300_"
          className="st4"
          d="M29.1 50.2H34.7V53.400000000000006H29.1z"
        />
        <path
          id="XMLID_298_"
          className="st4"
          d="M40.8 50.2L23.1 50.2 21.9 47.7 21.9 40.1 41.9 40.1 41.9 47.6z"
        />
        <path
          id="XMLID_297_"
          className="st4"
          d="M46.1 24.7c0-7.8-6.3-14.1-14.1-14.1s-14.1 6.3-14.1 14.1c0 5 2.6 9.4 6.5 11.9v3.5h15.3v-3.5c3.9-2.5 6.4-6.9 6.4-11.9z"
        />
        <path id="XMLID_296_" className="st4" d="M21.9 45.2L30.6 45.2" />
        <path id="XMLID_293_" className="st4" d="M32 28.4L32 37.9" />
        <path
          id="XMLID_290_"
          className="st4"
          d="M28.2 25.1L31.9 29 35.8 25.1"
        />
      </g>
      <g id="XMLID_301_" className="st0">
        <g id="XMLID_299_" className="st2">
          <g id="XMLID_315_">
            <path id="XMLID_321_" className="st3" d="M32 23L32 32.2" />
            <circle id="XMLID_320_" className="st3" cx={32} cy={33.6} r={1.4} />
            <path
              id="XMLID_319_"
              className="st3"
              d="M37.1 46.6v-6.1c0-.1-.1-.2-.2-.2h-9.7c-.1 0-.2.1-.2.2v6.1"
            />
            <path
              id="XMLID_318_"
              className="st3"
              d="M32.5 22.7H34s1 4.5 3.8 7.6l-2.2 9.9"
            />
            <path
              id="XMLID_317_"
              className="st3"
              d="M31.5 22.7H30s-1 4.5-3.8 7.6l2 9.9"
            />
          </g>
          <path
            id="XMLID_303_"
            d="M32 10.6c3.4 0 6.4 1.4 8.6 3.6 2.2 2.2 3.6 5.3 3.6 8.6 0 3.4-1.4 6.4-3.6 8.6"
            fill="none"
            stroke="#4c5159"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeDasharray={3}
          />
          <path
            id="XMLID_302_"
            className="st3"
            d="M23.4 31.4c-2.2-2.2-3.6-5.3-3.6-8.6 0-3.4 1.4-6.4 3.6-8.6 2.2-2.2 5.3-3.6 8.6-3.6"
          />
        </g>
        <path
          id="XMLID_797_"
          className="st4"
          d="M51.8 53.4H12.2c-.5 0-.9-.4-1-.9l-.4-2.3h17.6l.7 1H34l.7-1h18.6l-.4 2.3c-.1.6-.6.9-1.1.9z"
        />
        <path
          id="XMLID_323_"
          className="st4"
          d="M16.9 25.3h-4.2c-.1 0-.2.1-.2.2v24.6"
        />
        <path
          id="XMLID_322_"
          className="st4"
          d="M51.5 50.2V25.6c0-.1-.1-.2-.2-.2h-4.2"
        />
        <path id="XMLID_324_" className="st4" d="M16.4 46.3L47.1 46.3" />
      </g>
      <g id="XMLID_336_" className="st0">
        <path
          id="XMLID_333_"
          className="st4"
          d="M34.7 36.2v-7.4c0-.1.1-.2.2-.2h17.9c.1 0 .2.1.2.2v23.1c0 .1-.1.2-.2.2H45"
        />
        <path
          id="XMLID_305_"
          className="st4"
          d="M41.7 52.1H17.9c-.1 0-.3-.1-.3-.3V39.1c0-.1.1-.3.3-.3h23.8c.1 0 .3.1.3.3v12.7c0 .1-.1.3-.3.3z"
        />
        <path
          id="XMLID_306_"
          className="st4"
          d="M17.8 38.8L29.8 45.4 41.8 38.8"
        />
        <path
          id="XMLID_308_"
          className="st4"
          d="M14.8 52.1h-3.5c-.2 0-.3-.1-.3-.3V12.2c0-.2.1-.3.3-.3h30.2c.2 0 .3.1.3.3v14"
        />
        <g id="XMLID_311_" className="st2">
          <circle id="XMLID_307_" className="st3" cx={20} cy={18.9} r={1.7} />
          <path id="XMLID_310_" className="st3" d="M23.3 18.9L25.7 18.9" />
          <path id="XMLID_309_" className="st3" d="M14.3 18.9L16.7 18.9" />
        </g>
        <g id="XMLID_313_" className="st2">
          <circle id="XMLID_326_" className="st3" cx={24.6} cy={48.2} r={1.4} />
          <path id="XMLID_325_" className="st3" d="M27.3 48.2L29.2 48.2" />
          <path id="XMLID_314_" className="st3" d="M20 48.2L21.9 48.2" />
        </g>
        <g id="XMLID_329_" className="st2">
          <circle id="XMLID_335_" className="st3" cx={41.8} cy={33.4} r={1.4} />
          <path id="XMLID_334_" className="st3" d="M44.5 33.4L46.4 33.4" />
          <path id="XMLID_331_" className="st3" d="M37.2 33.4L39.1 33.4" />
        </g>
      </g>
      <g id="XMLID_355_" className="st0">
        <g id="XMLID_342_" className="st2">
          <g id="XMLID_350_">
            <path
              id="XMLID_354_"
              className="st3"
              d="M45.2 42.8l-2.3 2.3c-.1.1-.2.1-.3 0l-23-23-.8-3.1c-.1-.1.1-.3.2-.2l3.1.7 23 23c.2.1.2.3.1.3z"
            />
            <path id="XMLID_353_" className="st3" d="M39.9 42.9L42.9 40" />
            <path id="XMLID_351_" className="st3" d="M19.8 22.8L22.8 19.9" />
          </g>
          <g id="XMLID_338_">
            <path
              id="XMLID_344_"
              className="st3"
              d="M32 37.5l-9.8 9.7c-.1.1-.2.1-.2 0l-4.6-4.6c-.1-.1-.1-.2 0-.2l10-10"
            />
            <path
              id="XMLID_343_"
              className="st3"
              d="M32.7 27.1l10-10c.1-.1.2-.1.2 0l4.6 4.6c.1.1.1.2 0 .2L37.6 32"
            />
            <path id="XMLID_347_" className="st3" d="M19.8 40.1L21.7 42.1" />
            <path id="XMLID_346_" className="st3" d="M22.3 37.5L24.3 39.5" />
            <path id="XMLID_345_" className="st3" d="M24.9 35L26.8 37" />
            <path id="XMLID_341_" className="st3" d="M35.1 24.8L37 26.8" />
            <path id="XMLID_340_" className="st3" d="M37.6 22.3L39.6 24.2" />
            <path id="XMLID_339_" className="st3" d="M40.2 19.7L42.1 21.7" />
          </g>
        </g>
        <path
          id="XMLID_356_"
          className="st4"
          d="M32 54c-12.1 0-22-9.8-22-22 0-12.1 9.8-22 22-22 12.1 0 22 9.8 22 22"
        />
        <path id="XMLID_348_" className="st6" d="M54 32c0 12.1-9.8 22-22 22" />
      </g>
      <g id="XMLID_360_" className="st0">
        <g id="XMLID_150_" className="st2">
          <path
            id="XMLID_369_"
            className="st3"
            d="M42.6 33.4V31l-3.8-.5c-.2-.8-.5-1.5-.9-2.2l2.3-3-1.7-1.7-3 2.3c-.7-.4-1.4-.7-2.2-.9l-.5-3.8h-2.4l-.5 3.8c-.8.2-1.5.5-2.2.9l-3-2.3-1.7 1.7 2.3 3c-.4.7-.7 1.4-.9 2.2l-4 .5v2.4l3.8.6c.2.8.5 1.5.9 2.2l-2.3 3 1.7 1.7 3-2.3c.7.4 1.4.7 2.2.9l.5 3.8h2.4l.5-3.8c.8-.2 1.5-.5 2.2-.9l3 2.3 1.7-1.7-2.3-3c.4-.7.7-1.4.9-2.2l4-.6z"
          />
          <path
            id="XMLID_358_"
            className="st3"
            d="M34.9 32.2c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4 1.5-3.4 3.4-3.4"
          />
        </g>
        <path
          id="XMLID_374_"
          className="st4"
          d="M54.8 31.8c.1.1.1.1 0 .2-1.2 1.3-13.5 14.6-22.8 14.6S10.4 33.3 9.2 32c-.1-.1-.1-.1 0-.2 1.2-1.3 13.4-14.6 22.8-14.6 9.3 0 21.6 13.3 22.8 14.6z"
        />
        <path id="XMLID_366_" className="st4" d="M31.8 9.6L31.8 14.2" />
        <path id="XMLID_365_" className="st4" d="M42.9 12.5L40.6 16.5" />
        <path id="XMLID_364_" className="st4" d="M20.8 12.7L23 16.7" />
        <path id="XMLID_363_" className="st4" d="M31.8 54.4L31.8 49.8" />
        <path id="XMLID_362_" className="st4" d="M42.9 51.5L40.6 47.5" />
        <path id="XMLID_361_" className="st4" d="M20.8 51.3L23 47.3" />
      </g>
      <g id="XMLID_397_" className="st0">
        <g id="XMLID_221_" className="st2">
          <path
            id="XMLID_224_"
            className="st3"
            d="M9.4 15.3v-3.8c0-.2.1-.3.3-.3h41.7l3.2 2c.2.1.2.3 0 .4l-3.2 2H9.7c-.2 0-.3-.1-.3-.3z"
          />
          <path id="XMLID_223_" className="st3" d="M13.6 11L13.6 15.8" />
          <path id="XMLID_222_" className="st3" d="M50.5 11L50.5 15.8" />
        </g>
        <g id="XMLID_373_" className="st2">
          <path
            id="XMLID_389_"
            className="st3"
            d="M54.2 53H10c-.1 0-.2-.1-.2-.2v-8c0-.1.1-.2.2-.2h44.2c.1 0 .2.1.2.2v8c0 .1-.1.2-.2.2z"
          />
          <path id="XMLID_388_" className="st3" d="M14.1 44.6L14.1 48.1" />
          <path id="XMLID_387_" className="st3" d="M18.6 44.6L18.6 48.1" />
          <path id="XMLID_386_" className="st3" d="M23 44.6L23 48.1" />
          <path id="XMLID_385_" className="st3" d="M27.5 44.6L27.5 48.1" />
          <path id="XMLID_384_" className="st3" d="M31.9 44.6L31.9 48.1" />
          <path id="XMLID_383_" className="st3" d="M36.4 44.6L36.4 48.1" />
          <path id="XMLID_382_" className="st3" d="M40.8 44.6L40.8 48.1" />
          <path id="XMLID_381_" className="st3" d="M45.3 44.6L45.3 48.1" />
          <path id="XMLID_380_" className="st3" d="M49.7 44.6L49.7 48.1" />
        </g>
        <g id="XMLID_505_" className="st2">
          <path
            id="XMLID_506_"
            className="st3"
            d="M24.3 19.5h17v7.8H41c-.2-1.5-.6-2.4-1.1-2.8-.5-.4-1.1-.6-1.9-.6h-4v13.7c0 .6.1 1 .2 1.4.1.4.4.7.8 1 .4.2 1 .4 1.7.4v.4h-10v-.4c1.1 0 1.8-.3 2.2-.8.3-.5.5-1.2.5-2V23.9h-4c-.7 0-1.2.2-1.7.6-.4.4-.8 1.3-1.2 2.8h-.3v-7.8h2.1z"
          />
        </g>
        <g id="XMLID_404_" className="st2">
          <path id="XMLID_392_" className="st3" d="M17.7 38.9L17.7 41.6" />
          <path id="XMLID_391_" className="st3" d="M17.7 33.9L17.7 36.5" />
          <path id="XMLID_394_" className="st3" d="M17.7 28.8L17.7 31.4" />
          <path id="XMLID_395_" className="st3" d="M17.7 23.7L17.7 26.3" />
          <path id="XMLID_396_" className="st3" d="M17.7 18.6L17.7 21.2" />
        </g>
        <path id="XMLID_403_" className="st4" d="M45.7 38.9L45.7 41.6" />
        <path id="XMLID_402_" className="st4" d="M45.7 33.9L45.7 36.5" />
        <path id="XMLID_401_" className="st4" d="M45.7 28.8L45.7 31.4" />
        <path id="XMLID_400_" className="st4" d="M45.7 23.7L45.7 26.3" />
        <path id="XMLID_399_" className="st4" d="M45.7 18.6L45.7 21.2" />
      </g>
      <g id="XMLID_422_" className="st0">
        <g id="XMLID_411_" className="st2">
          <path
            id="XMLID_421_"
            className="st3"
            d="M49.2 16.6L51.2 14.3 53.1 16.6 53.1 49.4 49.2 49.4z"
          />
          <path id="XMLID_420_" className="st3" d="M51.2 53.2L51.2 49.9" />
          <path id="XMLID_418_" className="st3" d="M51.2 15L51.2 11.7" />
          <path id="XMLID_416_" className="st3" d="M53.2 30.4L49.1 30.4" />
          <path id="XMLID_413_" className="st3" d="M53.2 19.5L49.1 19.5" />
          <path
            id="XMLID_412_"
            className="st3"
            d="M49.2 47.1L46.5 47.1 46.5 36.3"
          />
        </g>
        <path
          id="XMLID_407_"
          className="st4"
          d="M32.3 10.8H11.1c-.2 0-.3.1-.3.3V52c0 .2.1.3.3.3h31.3c.2 0 .3-.1.3-.3V21.1L32.3 10.8z"
        />
        <path
          id="XMLID_390_"
          className="st4"
          d="M32.3 10.8v10.1c0 .1.1.2.2.2h10.1"
        />
        <path id="XMLID_405_" className="st4" d="M16.8 25.2L36.5 25.2" />
        <path id="XMLID_393_" className="st4" d="M16.8 29L36.5 29" />
        <path id="XMLID_406_" className="st4" d="M16.8 32.9L36.5 32.9" />
        <path id="XMLID_408_" className="st4" d="M16.8 38.8L36.5 38.8" />
        <path id="XMLID_409_" className="st4" d="M16.8 42.8L36.5 42.8" />
        <path id="XMLID_410_" className="st4" d="M16.8 46.8L26.5 46.8" />
      </g>
      <g id="XMLID_441_" className="st0">
        <g id="XMLID_431_" className="st2">
          <path
            id="XMLID_414_"
            className="st3"
            d="M45.4 53.6H11.2c-.2 0-.3-.1-.3-.3V42.1c0-.2.1-.3.3-.3h34.2c.2 0 .3.1.3.3v11.1c0 .2-.2.4-.3.4z"
          />
          <path id="XMLID_424_" className="st3" d="M20.6 41.8L20.6 53.6" />
          <path id="XMLID_417_" className="st3" d="M26.9 41.8L26.9 53.6" />
          <path id="XMLID_425_" className="st3" d="M33.1 41.8L33.1 53.6" />
          <path id="XMLID_426_" className="st3" d="M39.4 41.8L39.4 53.6" />
          <path
            id="XMLID_432_"
            className="st3"
            d="M10.9 39.9V17.7c0-.1.1-.3.3-.3h11.2c.1 0 .3.1.3.3v22.2"
          />
          <path id="XMLID_430_" className="st3" d="M10.9 36.2L22.6 36.2" />
          <path id="XMLID_429_" className="st3" d="M10.9 30L22.6 30" />
          <path id="XMLID_428_" className="st3" d="M10.9 23.7L22.6 23.7" />
          <path
            id="XMLID_440_"
            className="st3"
            d="M22.7 33.9l14.4-14.2c.1-.1.3-.1.4 0l7.9 7.9c.1.1.1.3 0 .4L31.1 41.9"
          />
          <path id="XMLID_439_" className="st3" d="M24 32.9L32.3 41.2" />
          <path id="XMLID_437_" className="st3" d="M28.5 28.5L36.7 36.7" />
          <path id="XMLID_435_" className="st3" d="M32.9 24L41.2 32.3" />
          <circle id="XMLID_427_" className="st3" cx={15.9} cy={47.4} r={1.3} />
        </g>
        <path
          id="XMLID_442_"
          className="st6"
          d="M13.8 12.7c3.4-1.4 7.1-2.2 11-2.2s7.6.8 11 2.2c3.4 1.4 6.4 3.5 9 6.1s4.6 5.6 6.1 9c1.4 3.4 2.2 7.1 2.2 11 0 3.9-.8 7.6-2.2 11"
        />
      </g>
      <g id="XMLID_44_" className="st0">
        <g id="XMLID_446_" className="st2">
          <path
            id="XMLID_451_"
            className="st3"
            d="M15.2 51h-3.5c-.1 0-.2-.1-.2-.2V16.6l1.9-2.9c.1-.1.3-.1.3 0l1.8 2.9v34.2c0 .1-.1.2-.3.2z"
          />
          <path id="XMLID_450_" className="st3" d="M11.3 47.2L15.7 47.2" />
          <path id="XMLID_448_" className="st3" d="M11.3 17.3L15.7 17.3" />
        </g>
        <path
          id="XMLID_447_"
          className="st4"
          d="M22.8 51h-2.5c-.1 0-.2-.1-.2-.2V16.2c0-.1.1-.2.2-.2h2.5"
        />
        <path
          id="XMLID_444_"
          className="st4"
          d="M42.6 15.9c0-1.6 1.3-3 3-3s3 1.3 3 3c0 1.6-1.3 3-3 3"
        />
        <path
          id="XMLID_436_"
          className="st4"
          d="M35 15.9c0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3 0 1.6-1.3 3-3 3"
        />
        <path
          id="XMLID_445_"
          className="st4"
          d="M26.3 15.9c0-1.6 1.3-3 3-3 1.6 0 3 1.3 3 3 0 1.6-1.3 3-3 3"
        />
        <path
          id="XMLID_449_"
          className="st4"
          d="M52.5 15.9H24.6c-.1 0-.2.1-.2.2v34.7c0 .1.1.2.2.2h20l8.1-8.1V16.1c0-.1-.1-.2-.2-.2z"
        />
        <path
          id="XMLID_433_"
          className="st4"
          d="M52.7 43h-7.8c-.1 0-.3.1-.3.3V51"
        />
        <circle id="XMLID_452_" className="st8" cx={37.9} cy={33.5} r={7.5} />
      </g>
      <g id="XMLID_453_" className="st0">
        <path
          id="XMLID_477_"
          className="st4"
          d="M27.7 45.2v8c0 .1.1.2.3.2l4.1-1.7 4.1 1.7c.1.1.3 0 .3-.2v-8"
        />
        <path
          id="XMLID_715_"
          className="st4"
          d="M41.4 45.7l-8.9-4.5c-.2-.1-.4-.1-.6 0L23.1 46c-.4.2-.9-.1-.9-.6l1.6-9.9c0-.2 0-.4-.2-.5l-7.2-6.9c-.4-.3-.2-.9.3-1l9.9-1.6c.2 0 .4-.2.4-.3l4.3-9c.2-.4.8-.5 1.1 0l4.5 8.9c.1.2.3.3.5.3l9.9 1.3c.5.1.7.7.3 1l-7.1 7.1c-.1.1-.2.3-.2.5l1.8 9.8c.2.5-.3.9-.7.6z"
        />
        <path
          id="XMLID_459_"
          className="st4"
          d="M47.2 16.8c3.9 3.9 6.3 9.3 6.3 15.2 0 5.9-2.4 11.3-6.3 15.2"
        />
        <path
          id="XMLID_457_"
          className="st6"
          d="M16.8 16.8c3.9-3.9 9.3-6.3 15.2-6.3s11.3 2.4 15.2 6.3"
        />
        <path
          id="XMLID_456_"
          className="st4"
          d="M16.8 47.3c-3.9-3.9-6.3-9.3-6.3-15.2 0-5.9 2.4-11.3 6.3-15.2"
        />
      </g>
      <g id="XMLID_465_" className="st0">
        <g id="XMLID_375_" className="st2">
          <path
            id="XMLID_466_"
            className="st3"
            d="M46.2 19.6h6.4c.6 0 1 .4 1 1v24.8c0 .6-.4 1-1 1h-41c-.6 0-1-.4-1-1V20.6c0-.6.4-1 1-1h5.1"
          />
          <path id="XMLID_379_" className="st3" d="M10.5 40.6L53.5 40.6" />
          <path id="XMLID_378_" className="st3" d="M21.3 45.9L21.3 53.2" />
          <path id="XMLID_377_" className="st3" d="M42.3 45.9L42.3 53.2" />
          <path id="XMLID_376_" className="st3" d="M17.5 53.2L46.2 53.2" />
        </g>
        <g id="XMLID_461_" className="st2">
          <path
            id="XMLID_472_"
            className="st3"
            d="M19 27.8s.1 0 0 0h15.1l6.1 4.8c.1.1.2 0 .2-.1v-4.7h3.2v-17H19.3c-.1 0-.2.1-.2.2v16.8z"
          />
          <path id="XMLID_464_" className="st3" d="M22.9 14.9L40.3 14.9" />
          <path id="XMLID_463_" className="st3" d="M22.9 18.7L40.3 18.7" />
          <path id="XMLID_462_" className="st3" d="M22.9 22.6L32.3 22.6" />
        </g>
      </g>
      <g id="XMLID_494_" className="st0">
        <path
          id="XMLID_491_"
          className="st4"
          d="M50.7 9.5C55.1 9.5 54 16 54 16h-6.4"
        />
        <path
          id="XMLID_488_"
          className="st4"
          d="M19.7 28.8V13.9c0-2.5 2-4.5 4.5-4.5h26.6"
        />
        <path
          id="XMLID_486_"
          className="st4"
          d="M51.2 9.5h-1.8c-2 0-3.7 1.6-3.7 3.7v15.7"
        />
        <path
          id="XMLID_482_"
          className="st4"
          d="M48.2 37.1v6.4l6 4.2V54.4c0 .1-.1.3-.3.3H11.5c-.1 0-.3-.1-.3-.3v-6.6-.1l5.8-4.2v-6.4"
        />
        <path
          id="XMLID_474_"
          className="st4"
          d="M20.4 45.9L20.4 43.1 24.2 43.1"
        />
        <path
          id="XMLID_479_"
          className="st4"
          d="M23.3 51.5L23.3 48.7 27.2 48.7"
        />
        <path
          id="XMLID_480_"
          className="st4"
          d="M30.5 51.5L30.5 48.7 34.3 48.7"
        />
        <path
          id="XMLID_481_"
          className="st4"
          d="M37.6 51.5L37.6 48.7 41.5 48.7"
        />
        <path
          id="XMLID_475_"
          className="st4"
          d="M27.5 45.9L27.5 43.1 31.4 43.1"
        />
        <path
          id="XMLID_476_"
          className="st4"
          d="M34.7 45.9L34.7 43.1 38.5 43.1"
        />
        <path
          id="XMLID_478_"
          className="st4"
          d="M41.8 45.9L41.8 43.1 45.7 43.1"
        />
        <path
          id="XMLID_469_"
          className="st4"
          d="M13.6 31.6H50.9V34.800000000000004H13.6z"
        />
        <path id="XMLID_483_" className="st4" d="M9.7 29.9H13.5V36.8H9.7z" />
        <path id="XMLID_492_" className="st4" d="M22.5 15.8L41.9 15.8" />
        <path id="XMLID_490_" className="st4" d="M22.5 21.4L41.9 21.4" />
        <path id="XMLID_493_" className="st4" d="M22.5 27.1L41.9 27.1" />
      </g>
      <g id="XMLID_519_" className="st0">
        <path
          id="XMLID_484_"
          className="st4"
          d="M35.3 54.1H21.1c-.1 0-.2-.1-.2-.2V39.1h14.6V54c0 .1-.1.1-.2.1z"
        />
        <path id="XMLID_498_" className="st4" d="M35.5 39.1L37.1 34.1" />
        <path
          id="XMLID_497_"
          className="st4"
          d="M37.1 34.1l1.6 5v13.2c0 .1 0 .1-.1.1l-3.3 1.7"
        />
        <path id="XMLID_487_" className="st4" d="M22.5 33.7L20.9 38.5" />
        <path
          id="XMLID_496_"
          className="st4"
          d="M37.1 33.7H22.5V31c0-.1.1-.1.1-.1H37c.1 0 .1.1.1.1v2.7z"
        />
        <path id="XMLID_500_" className="st4" d="M25 42.7L31.4 42.7" />
        <path id="XMLID_499_" className="st4" d="M25 45.9L31.4 45.9" />
        <path id="XMLID_501_" className="st4" d="M25 49L31.4 49" />
        <path
          id="XMLID_516_"
          className="st4"
          d="M39.9 54h9.6c.1 0 .2-.1.2-.2V28c0-2.3-1.8-4.1-4.1-4.1v-14h-4.9V24c-2.3 0-4.1 1.8-4.1 4.1v1.1"
        />
        <path id="XMLID_503_" className="st4" d="M38.6 13.5L47.8 13.5" />
        <path id="XMLID_502_" className="st4" d="M38.6 16.6L47.8 16.6" />
        <path
          id="XMLID_512_"
          className="st4"
          d="M49.7 34.4L41.3 34.4 41.3 46.8 49.7 46.8"
        />
        <path id="XMLID_514_" className="st4" d="M43.9 37.8L47 37.8" />
        <path id="XMLID_504_" className="st4" d="M43.9 40.5L47 40.5" />
        <path id="XMLID_515_" className="st4" d="M43.9 43.2L47 43.2" />
        <g id="XMLID_510_" className="st2">
          <path
            id="XMLID_518_"
            className="st3"
            d="M20.3 18.8L22.9 21.4 29.4 14.8"
          />
          <path
            id="XMLID_517_"
            className="st5"
            d="M30.5 19.3c0 4.5-3.6 8.1-8.1 8.1s-8.1-3.6-8.1-8.1 3.6-8.1 8.1-8.1c1.5 0 2.9.4 4.1 1.1"
          />
        </g>
      </g>
      <g id="XMLID_75_" className="st0">
        <g id="XMLID_73_" className="st2">
          <path
            id="XMLID_107_"
            className="st3"
            d="M46.2 25.8v-2.4l-3.8-.6c-.2-.8-.5-1.6-.9-2.3l2.3-3.1-1.7-1.7-3.2 2.3c-.7-.4-1.5-.8-2.3-.9l-.6-3.8h-2.4l-.6 3.8c-.8.2-1.6.5-2.3.9l-3.1-2.3-1.7 1.7 2.3 3.1c-.4.7-.8 1.5-1 2.3l-3.8.5v2.4l3.8.6c.2.8.5 1.6.9 2.3L26 31.7l1.7 1.7 3.1-2.3c.7.4 1.5.8 2.3.9l.6 3.8h2.4l.6-3.8c.8-.2 1.6-.5 2.3-.9l3.1 2.3 1.7-1.7-2.3-3.1c.4-.7.8-1.5.9-2.3l3.8-.5z"
          />
          <path
            id="XMLID_511_"
            className="st3"
            d="M31.4 24.6c0-1 .4-1.8 1-2.4.6-.6 1.5-1 2.4-1 1 0 1.8.4 2.4 1 .6.6 1 1.5 1 2.4 0 1-.4 1.8-1 2.4-.6.6-1.5 1-2.4 1"
          />
        </g>
        <path
          id="XMLID_508_"
          className="st4"
          d="M45 54V35.4c2.7-2.7 4.4-6.4 4.4-10.5s-1.7-7.8-4.4-10.5S38.6 10 34.5 10s-7.8 1.7-10.5 4.4-4.4 6.4-4.4 10.5l-4.8 9c-.1.2 0 .3.2.3l4.4.1v10.2c0 .9.7 1.5 1.5 1.5h11.6"
        />
        <path id="XMLID_522_" className="st4" d="M28.6 46.7L28.6 54" />
      </g>
    </g>
    <g id="Icon_text" className="st0">
      <g id="XMLID_7_" className="st2">
        <text
          id="XMLID_192_"
          transform="translate(-176.755 -76.833)"
          className="st10 st11 st12"
        >
          {"DESIGN TOOLS"}
        </text>
      </g>
      <g id="XMLID_101_" className="st2">
        <text
          id="XMLID_194_"
          transform="translate(17.72 -76.833)"
          className="st10 st11 st12"
        >
          {"VECTOR"}
        </text>
      </g>
      <text
        id="XMLID_77_"
        transform="translate(-82.22 -76.833)"
        className="st2"
      >
        <tspan x={0} y={0} className="st10 st11 st12">
          {"DEVELOPING"}
        </tspan>
        <tspan x={12.6} y={7} className="st10 st11 st12">
          {"IDEAS"}
        </tspan>
      </text>
      <g id="XMLID_133_" className="st2">
        <text
          id="XMLID_196_"
          transform="translate(103.202 -76.833)"
          className="st10 st11 st12"
        >
          {"PRECISION"}
        </text>
      </g>
      <g id="XMLID_169_" className="st2">
        <text
          id="XMLID_198_"
          transform="translate(-165.654 20.167)"
          className="st10 st11 st12"
        >
          {"CAMERA"}
        </text>
      </g>
      <g id="XMLID_216_" className="st2">
        <text
          id="XMLID_199_"
          transform="translate(-84.871 20.167)"
          className="st10 st11 st12"
        >
          {"PROTOTYPING"}
        </text>
      </g>
      <g id="XMLID_240_" className="st2">
        <text id="XMLID_197_" transform="translate(20.573 20.166)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"VIDEO"}
          </tspan>
          <tspan x={-13.3} y={7} className="st10 st11 st12">
            {"PRODUCTION"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_256_" className="st2">
        <text
          id="XMLID_195_"
          transform="translate(104.38 20.166)"
          className="st10 st11 st12"
        >
          {"DISCOVER"}
        </text>
      </g>
      <g id="XMLID_274_" className="st2">
        <text id="XMLID_193_" transform="translate(196.187 20.166)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"CREATIVE"}
          </tspan>
          <tspan x={-0.8} y={7} className="st10 st11 st12">
            {"SOLUTION"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_280_" className="st2">
        <text
          id="XMLID_191_"
          transform="translate(-176.375 116.75)"
          className="st10 st11 st12"
        >
          {"ILLUSTRATION"}
        </text>
      </g>
      <g id="XMLID_295_" className="st2">
        <text id="XMLID_189_" transform="translate(-77.043 116.75)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"CREATIVE"}
          </tspan>
          <tspan x={9.2} y={7} className="st10 st11 st12">
            {"IDEA"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_304_" className="st2">
        <text
          id="XMLID_188_"
          transform="translate(9.539 116.75)"
          className="st10 st11 st12"
        >
          {"DIGITAL ART"}
        </text>
      </g>
      <g id="XMLID_337_" className="st2">
        <text
          id="XMLID_190_"
          transform="translate(103.489 116.75)"
          className="st10 st11 st12"
        >
          {"BRANDING"}
        </text>
      </g>
      <g id="XMLID_357_" className="st2">
        <text id="XMLID_287_" transform="translate(197.83 116.75)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"GRAPHIC"}
          </tspan>
          <tspan x={2.7} y={7} className="st10 st11 st12">
            {"DESIGN"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_371_" className="st2">
        <text
          id="XMLID_288_"
          transform="translate(-162.77 212.417)"
          className="st10 st11 st12"
        >
          {"VISION"}
        </text>
      </g>
      <g id="XMLID_398_" className="st2">
        <text
          id="XMLID_289_"
          transform="translate(-83.453 212.417)"
          className="st10 st11 st12"
        >
          {"FONT DESIGN"}
        </text>
      </g>
      <g id="XMLID_423_" className="st2">
        <text id="XMLID_291_" transform="translate(15.458 212.417)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"PROJECT"}
          </tspan>
          <tspan x={6.2} y={7} className="st10 st11 st12">
            {"BRIEF"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_443_" className="st2">
        <text id="XMLID_312_" transform="translate(110.27 212.417)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"COLOR"}
          </tspan>
          <tspan x={-2.9} y={7} className="st10 st11 st12">
            {"PALETTE"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_455_" className="st2">
        <text
          id="XMLID_316_"
          transform="translate(199.799 212.417)"
          className="st10 st11 st12"
        >
          {"SKETCH"}
        </text>
      </g>
      <g id="XMLID_460_" className="st2">
        <text id="XMLID_327_" transform="translate(-167.47 306.667)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"PREMIUM"}
          </tspan>
          <tspan x={2.1} y={7} className="st10 st11 st12">
            {"QUALITY"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_359_" className="st2">
        <text id="XMLID_328_" transform="translate(-72.697 306.667)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"ONLINE"}
          </tspan>
          <tspan x={-9.9} y={7} className="st10 st11 st12">
            {"CONSULTING"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_495_" className="st2">
        <text
          id="XMLID_330_"
          transform="translate(6.245 306.667)"
          className="st10 st11 st12"
        >
          {"COPYWRITING"}
        </text>
      </g>
      <g id="XMLID_520_" className="st2">
        <text id="XMLID_332_" transform="translate(105.455 306.667)">
          <tspan x={0} y={0} className="st10 st11 st12">
            {"PACKAGE"}
          </tspan>
          <tspan x={3.7} y={7} className="st10 st11 st12">
            {"DESIGN"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_521_" className="st2">
        <text
          id="XMLID_349_"
          transform="translate(187.544 306.666)"
          className="st10 st11 st12"
        >
          {"PRODUCTIVITY"}
        </text>
      </g>
    </g>
    <g id="headline" className="st0">
      <circle
        id="XMLID_61_"
        cx={-133.5}
        cy={-208.4}
        r={18.3}
        display="inline"
        fill="#74e2f0"
      />
      <circle
        id="XMLID_60_"
        cx={-110.1}
        cy={-208.4}
        r={18.3}
        display="inline"
        fill="#fbda73"
      />
      <circle
        id="XMLID_63_"
        cx={-122.7}
        cy={-190.1}
        r={18.3}
        display="inline"
        fill="#f08e70"
      />
      <g id="XMLID_1_" className="st2">
        <text id="XMLID_352_" transform="translate(-183.755 -194.085)">
          <tspan
            x={0}
            y={0}
            fill="#231f20"
            fontFamily="Oswald-Bold"
            fontSize="22.512px"
          >
            {"FLAT "}
          </tspan>
          <tspan
            x={45.5}
            y={0}
            fill="#231f20"
            fontFamily="Oswald-Light"
            fontSize="22.512px"
          >
            {"LINE "}
          </tspan>
          <tspan
            x={83.9}
            y={0}
            fill="#231f20"
            fontFamily="Oswald-Bold"
            fontSize="22.512px"
          >
            {"ICONS"}
          </tspan>
        </text>
      </g>
      <g id="XMLID_2_" className="st2">
        <text
          id="XMLID_367_"
          transform="translate(191.133 -193.906)"
          fill="#231f20"
          fontFamily="Oswald-Light"
          fontSize="16.1735px"
        >
          {"DESIGN"}
        </text>
      </g>
    </g>
  </svg>
);

const MonitoringIcon = () => (
  <svg width={16} height={16} viewBox="0 0 32 32">
    <path d="M28 16v6H4V6h7V4H4a2 2 0 00-2 2v16a2 2 0 002 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 002-2v-6zM18 28h-4v-4h4z" />
    <path d="M18 18h-.01a1 1 0 01-.951-.725L15.246 11H11V9h5a1 1 0 01.962.725l1.074 3.76 3.009-9.78A1.014 1.014 0 0122 3a.98.98 0 01.949.684L24.72 9H30v2h-6a1 1 0 01-.949-.684l-1.013-3.04-3.082 10.018A1 1 0 0118 18z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
);

const DataSourcesIcon = () => (
  <svg width={16} height={16} viewBox="0 0 64 64" xmlSpace="preserve">
    <path d="M24 32c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8zm14 0c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6z" />
    <path d="M57 27a5.01 5.01 0 00-4.899 4H47v-6a1 1 0 00-.504-.868l-3.318-1.896 7.069-7.069A4.969 4.969 0 0053 16c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5c0 1.017.309 1.962.833 2.753l-7.455 7.455L33 16.42v-4.521A5.009 5.009 0 0037 7c0-2.757-2.243-5-5-5s-5 2.243-5 5a5.01 5.01 0 004 4.899v4.521l-8.378 4.788-7.455-7.455A4.969 4.969 0 0016 11c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.969 4.969 0 002.753-.833l7.069 7.069-3.318 1.896A1 1 0 0017 25v6h-5.101A5.01 5.01 0 007 27c-2.757 0-5 2.243-5 5s2.243 5 5 5a5.01 5.01 0 004.899-4H17v6a1 1 0 00.504.868l3.318 1.896-7.069 7.069A4.969 4.969 0 0011 48c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5a4.969 4.969 0 00-.833-2.753l7.455-7.455L31 47.58v4.521A5.009 5.009 0 0027 57c0 2.757 2.243 5 5 5s5-2.243 5-5a5.01 5.01 0 00-4-4.899V47.58l8.378-4.788 7.455 7.455A4.969 4.969 0 0048 53c0 2.757 2.243 5 5 5s5-2.243 5-5-2.243-5-5-5a4.969 4.969 0 00-2.753.833l-7.069-7.069 3.318-1.896A1 1 0 0047 39v-6h5.101A5.009 5.009 0 0057 37c2.757 0 5-2.243 5-5s-2.243-5-5-5zM53 8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm-42 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM7 35c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm4 21c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm42-6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM29 7c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm6 50c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm10-18.58l-13 7.429-13-7.429V25.58l13-7.429 13 7.429v12.84zM57 35c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
  </svg>
);

const TeapotIcon = () => (
  <svg width={16} height={16} viewBox="0 0 63.004 63.004" xmlSpace="preserve">
    <path d="M42.441 59.752h-28.31c-.447 0-.871-.199-1.156-.543-4.644-5.606-7.099-12.312-7.099-19.395 0-7.201 2.44-14.32 6.37-18.58a1.505 1.505 0 011.102-.482h29.875c.419 0 .819.176 1.103.482 3.929 4.259 6.369 11.378 6.369 18.58 0 7.082-2.455 13.789-7.099 19.395a1.5 1.5 0 01-1.155.543zm-27.595-3h26.879c3.908-4.947 5.97-10.789 5.97-16.938 0-6.109-2.006-12.324-5.15-16.062H14.026c-3.144 3.74-5.15 9.953-5.15 16.062 0 6.15 2.061 11.991 5.97 16.938z" />
    <path d="M51.885 48.625c-.146 0-.292-.009-.437-.025-1.843-.215-2.853-1.785-3.159-2.679a1.5 1.5 0 112.838-.973c.001 0 .261.631.676.673.208.014 2.107.017 6.122-6.367 1.97-3.133 2.539-5.844 1.694-8.059-1.014-2.65-3.879-4.108-5.26-4.675l-5.451 5.062a1.5 1.5 0 11-2.041-2.199l6.122-5.684c.385-.357.93-.487 1.433-.343.249.072 6.099 1.799 7.999 6.768 1.201 3.144.543 6.752-1.957 10.726-3.323 5.285-6.064 7.775-8.579 7.775zM8.131 34.967a1.5 1.5 0 01-1.351-.848c-.037-.074-2.067-4.142-5.28-4.142a1.5 1.5 0 110-3c5.122 0 7.869 5.603 7.983 5.841a1.5 1.5 0 01-1.352 2.149zM42.613 18.752H13.869a1.502 1.502 0 01-1.195-2.408l5.32-7a1.499 1.499 0 011.194-.592h18.086c.469 0 .911.219 1.194.592l5.195 6.837a1.5 1.5 0 01-1.05 2.571zm-25.721-3H39.57l-3.04-4H19.932l-3.04 4z" />
    <path d="M28.861 10.252a1.5 1.5 0 01-1.5-1.5v-4a1.5 1.5 0 013 0v4a1.5 1.5 0 01-1.5 1.5z" />
  </svg>
);

const MqttLogoIcon = () => (
  <svg
    baseProfile="tiny"
    width={64}
    height={64}
    viewBox="0 0 1100 280"
    overflow="visible"
  >
    <path
      d="M399.6 142.5c1.7 3.7 3.3 7.5 4.8 11.4a149.3 149.3 0 014.9-11.6c1.7-3.7 3.5-7.4 5.3-10.9L465 32c.9-1.7 1.8-3 2.8-4 .9-.9 2-1.6 3.2-2.1s2.5-.7 4-.7h40v196.6h-40.2V108.6c0-5.5.3-11.4.8-17.8l-52.1 101.1c-1.6 3.2-3.8 5.5-6.5 7.2-2.7 1.6-5.9 2.4-9.4 2.4h-6.2c-3.5 0-6.6-.8-9.4-2.4-2.7-1.6-4.9-4-6.5-7.2L333 90.7c.4 3.2.6 6.3.8 9.4s.3 6 .3 8.6v113.1h-40.2V25.2h40c1.5 0 2.8.2 4 .7s2.2 1.1 3.2 2.1c.9.9 1.9 2.3 2.8 4l50.6 99.9c1.7 3.4 3.5 6.9 5.1 10.6zm331.1-19.1c0 8.5-.9 16.6-2.6 24.4-1.8 7.8-4.3 15.1-7.6 21.9s-7.3 13.2-12.2 19c-4.8 5.9-10.3 11-16.4 15.5l49.8 54.4h-37.5c-5.4 0-10.3-.7-14.7-2s-8.3-3.9-11.7-7.9l-24.4-27.4c-4 .8-8 1.4-12.1 1.9-4.1.4-8.3.7-12.6.7-15.3 0-29.3-2.6-41.9-7.7s-23.4-12.2-32.3-21.3c-9-9-15.9-19.7-20.8-31.9s-7.4-25.5-7.4-39.7 2.5-27.4 7.4-39.7c4.9-12.2 11.8-22.9 20.8-31.9s19.7-16.1 32.3-21.2 26.5-7.7 41.9-7.7c15.3 0 29.2 2.6 41.8 7.8s23.3 12.3 32.2 21.3 15.8 19.6 20.7 31.9c4.9 12.2 7.3 25.4 7.3 39.6zm-46.7 0c0-9.7-1.3-18.5-3.8-26.3s-6.1-14.4-10.9-19.8c-4.7-5.4-10.5-9.5-17.3-12.4s-14.6-4.3-23.4-4.3-16.7 1.4-23.6 4.3-12.7 7-17.4 12.4-8.3 12-10.9 19.8c-2.5 7.8-3.8 16.5-3.8 26.3s1.3 18.6 3.8 26.4 6.1 14.4 10.9 19.8c4.7 5.4 10.5 9.5 17.4 12.4 6.9 2.8 14.7 4.3 23.6 4.3 8.7 0 16.5-1.4 23.4-4.3 6.8-2.8 12.6-7 17.3-12.4s8.3-12 10.9-19.8 3.8-16.6 3.8-26.4zm193.2-98.3v36.2h-53.3v160.5h-45.6V61.3H725V25.1h152.2zm174.6 0v36.2h-55.3v160.5h-45.6V61.3h-53.3V25.1h154.2z"
      fill="#606"
    />
    <path
      d="M46 41.4v31h.6c84.4 0 153.2 68 153.9 151.8h30.1C229.8 123.5 147.4 41.7 46 41.4zm0 64v31h.6c48.9 0 88.8 39.3 89.5 87.8h30.1c-.7-65.4-54.3-118.5-120.2-118.8zM248.8 144V81.5C241.1 71 231.6 59 222.1 49.7c-10.6-10.5-23-20-35-28.3h-66.4C178.9 42.3 225.6 87.2 248.8 144z"
      fill="#fff"
    />
    <path
      d="M46.5 136.4h-.6V214c0 5.6 4.6 10.2 10.2 10.2H136c-.7-48.5-40.5-87.8-89.5-87.8zm0-64h-.6v33c65.9.3 119.5 53.3 120.2 118.8h34.2C199.7 140.4 131 72.4 46.5 72.4zm202.3 141.7V144c-23.2-56.8-69.9-101.7-128-122.6H56.1c-5.6 0-10.2 4.6-10.2 10.2v9.9c101.4.3 183.9 82 184.5 182.8h8.2c5.7-.1 10.2-4.6 10.2-10.2zM222.1 49.7c9.4 9.4 19 21.3 26.7 31.8v-50a10.07 10.07 0 00-10.1-10.1h-51.5c12 8.3 24.4 17.8 34.9 28.3z"
      fill="#606"
    />
  </svg>
);

const GraphIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <defs>
      <style>
        {
          ".a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>
    <circle className="a" cx={7} cy={16} r={2} />
    <circle className="a" cx={16} cy={6} r={3} />
    <circle className="a" cx={18} cy={18} r={4} />
    <circle className="a" cx={4} cy={4} r={2} />
    <path className="a" d="M14 18L8.75774 16.95155" />
    <path className="a" d="M16.95928 8.83997L18.2766 14.01668" />
    <path className="a" d="M6 4L13.16407 5.02344" />
    <path
      d="M6.744 14.017C7 14 4.36 5.967 4.36 5.967"
      fillRule="evenodd"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5px"
    />
  </svg>
);

const SupportIcon = () => (
  <svg viewBox="0 0 32 32" width={16} height={16} xmlSpace="preserve">
    <g
      fill="none"
      stroke="#000"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M7 25H6a5 5 0 01-5-5v0a5 5 0 015-5h1v10zM26 25h-1V15h1a5 5 0 015 5v0a5 5 0 01-5 5zM5 15v-3C5 5.925 9.925 1 16 1h0c6.075 0 11 4.925 11 11v3M27 25v4a2 2 0 01-2 2h-3" />
      <path d="M18 31L20 31" />
    </g>
  </svg>
);

const FeedbackIcon = () => (
  <svg width={16} height={16} viewBox="0 0 456.521 456.521" xmlSpace="preserve">
    <path d="M128.347 456.521c-14.051 0-22.747-2.888-23.562-3.168-6.801-2.357-10.536-9.665-8.459-16.561l21.03-69.826c-61.909-36.053-99.917-99.725-99.917-168.663C17.439 88.961 112.013 0 228.26 0s210.821 88.961 210.821 198.303c0 106.942-88.3 193.449-201.523 198.058a12.848 12.848 0 01-5.41-.084l-.657-.147a13.426 13.426 0 01-10.421-14.386 13.422 13.422 0 0112.977-12.134c99.914-2.881 178.178-78.128 178.178-171.306 0-94.535-82.527-171.446-183.965-171.446S44.295 103.767 44.295 198.303c0 62.427 36.487 119.979 95.221 150.192a13.422 13.422 0 016.458 16.576l-19.481 64.686c13.802.266 37.613-3.077 65.791-24.143 5.934-4.434 14.358-3.224 18.792 2.714 4.441 5.945 3.228 14.358-2.714 18.799-32.261 24.121-61.023 29.394-80.015 29.394z" />
    <path d="M228.26 143.786H109.184c-5.934 0-10.742-4.812-10.742-10.742 0-5.931 4.808-10.742 10.742-10.742H228.26c5.934 0 10.742 4.812 10.742 10.742.001 5.93-4.807 10.742-10.742 10.742zM228.26 210.199H109.184c-5.934 0-10.742-4.812-10.742-10.743s4.808-10.742 10.742-10.742H228.26c5.934 0 10.742 4.812 10.742 10.742.001 5.931-4.807 10.743-10.742 10.743zM228.26 276.612H109.184c-5.934 0-10.742-4.812-10.742-10.742s4.808-10.742 10.742-10.742H228.26c5.934 0 10.742 4.812 10.742 10.742s-4.807 10.742-10.742 10.742zM292.694 165.268c0 1.508-.292 2.913-.87 4.21a11.912 11.912 0 01-2.313 3.437 10.146 10.146 0 01-3.389 2.313c-1.303.551-2.708.822-4.21.822-3.081 0-5.632-1.027-7.653-3.081-2.016-2.054-3.027-4.621-3.027-7.702 0-6.842 1.319-13.279 3.956-19.306 2.632-6.021 6.21-11.296 10.728-15.814 4.518-4.518 9.788-8.075 15.814-10.68 6.021-2.6 12.425-3.902 19.203-3.902 6.777 0 13.177 1.335 19.203 4.005 6.021 2.67 11.296 6.264 15.814 10.782s8.096 9.793 10.728 15.814c2.638 6.026 3.956 12.393 3.956 19.1 0 13.555-4.897 25.332-14.685 35.325l-16.122 14.89c-5.48 5.48-8.215 11.469-8.215 17.971 0 3.081-1.011 5.632-3.027 7.648-2.021 2.021-4.572 3.032-7.653 3.032s-5.648-1.011-7.702-3.032c-2.054-2.016-3.081-4.567-3.081-7.648 0-12.323 4.891-23.375 14.685-33.169l16.122-14.993c5.475-5.68 8.215-12.355 8.215-20.024 0-3.832-.757-7.459-2.259-10.885-1.508-3.421-3.54-6.415-6.113-8.988-2.562-2.562-5.561-4.599-8.983-6.107-3.427-1.503-7.053-2.259-10.885-2.259-3.902 0-7.567.735-10.988 2.205-3.427 1.475-6.415 3.481-8.988 6.01-2.562 2.535-4.583 5.513-6.053 8.934-1.473 3.428-2.208 7.125-2.208 11.092zM335.515 266.969c0 4.043-1.421 7.48-4.259 10.323-2.843 2.837-6.286 4.259-10.323 4.259-4.043 0-7.48-1.421-10.323-4.259-2.837-2.843-4.259-6.28-4.259-10.323 0-4.037 1.421-7.48 4.259-10.323 2.843-2.837 6.28-4.259 10.323-4.259 4.037 0 7.48 1.421 10.323 4.259 2.838 2.842 4.259 6.285 4.259 10.323z" />
  </svg>
);

const StreamingIcon = () => (
  <svg data-name="Layer 1" height={16} viewBox="0 0 32 32" width={16}>
    <path d="M25 2l-1.414 1.414L26.172 6h-5.09a16.93 16.93 0 00-6.314 1.216l-4.279 1.711A14.93 14.93 0 014.92 10H2v2h2.918a16.93 16.93 0 006.314-1.216l4.279-1.711A14.93 14.93 0 0121.08 8h5.09l-2.586 2.586L25 12l5-5z" />
    <path d="M21 11l-1.414 1.414L22.172 15h-3.27a16.942 16.942 0 00-5.97 1.083l-2.566.962A14.946 14.946 0 015.099 18H2v2h3.099a16.942 16.942 0 005.969-1.083l2.566-.962A14.946 14.946 0 0118.901 17h3.27l-2.585 2.586L21 21l5-5z" />
    <path d="M17 20l-1.414 1.414L18.172 24h-1.575a16.988 16.988 0 00-5.377.872l-1.073.358a14.985 14.985 0 01-4.744.77H2v2h3.403a16.988 16.988 0 005.377-.872l1.073-.358a14.985 14.985 0 014.744-.77h1.575l-2.586 2.586L17 30l5-5z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const ReportsIcon = () => (
  <svg viewBox="0 0 64 64" xmlSpace="preserve" height={16} width={16}>
    <path d="M43.985 0H7.105v64h49.79V12.92L43.985 0zm10.91 62H9.105V2h33.46v12.33h12.33V62z" />
    <path d="M47.50497 37.14001L41.94498 37.14001 41.94498 56.27002 39.06497 56.27002 39.06497 40.14001 33.50497 40.14001 33.50497 56.27002 30.62497 56.27002 30.62497 43.14001 25.06497 43.14001 25.06497 56.27002 22.18497 56.27002 22.18497 46.14001 16.62497 46.14001 16.62497 56.27002 13.51498 56.27002 13.51498 58.27002 50.49496 58.27002 50.49496 56.27002 47.50497 56.27002z" />
    <path d="M16.64163 9.78815H35.03323V11.78815H16.64163z" />
    <path d="M13.65823 24.51764H48.07522V26.51764H13.65823z" />
    <path d="M13.65823 29.62213H48.07522V31.62213H13.65823z" />
    <path d="M13.65823 19.41315H48.07522V21.41315H13.65823z" />
  </svg>
);

const MachineLearning1Icon = () => (
  <svg height={16} viewBox="0 0 32 32" width={16}>
    <path d="M27 24a2.96 2.96 0 00-1.285.3l-4.3-4.3H18v2h2.586l3.715 3.715A2.966 2.966 0 0024 27a3 3 0 103-3zm0 4a1 1 0 111-1 1 1 0 01-1 1zM27 13a2.995 2.995 0 00-2.816 2H18v2h6.184A2.995 2.995 0 1027 13zm0 4a1 1 0 111-1 1 1 0 01-1 1zM27 2a3.003 3.003 0 00-3 3 2.966 2.966 0 00.348 1.373L20.596 10H18v2h3.404l4.4-4.252A2.999 2.999 0 1027 2zm0 4a1 1 0 111-1 1 1 0 01-1 1z" />
    <path d="M18 6h2V4h-2a3.976 3.976 0 00-3 1.382A3.976 3.976 0 0012 4h-1a9.01 9.01 0 00-9 9v6a9.01 9.01 0 009 9h1a3.976 3.976 0 003-1.382A3.976 3.976 0 0018 28h2v-2h-2a2.002 2.002 0 01-2-2V8a2.002 2.002 0 012-2zm-6 20h-1a7.005 7.005 0 01-6.92-6H6v-2H4v-4h3a3.003 3.003 0 003-3V9H8v2a1 1 0 01-1 1H4.08A7.005 7.005 0 0111 6h1a2.002 2.002 0 012 2v4h-2v2h2v4h-2a3.003 3.003 0 00-3 3v2h2v-2a1 1 0 011-1h2v4a2.002 2.002 0 01-2 2z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const MachineLearning2Icon = () => (
  <svg viewBox="0 0 512 512" xmlSpace="preserve" height={16} width={16}>
    <path
      clipRule="evenodd"
      d="M208.748 113.745c-5.849 5.824-8.777 12.864-8.789 21.121.012 8.254 2.94 15.295 8.789 21.119 5.824 5.826 12.866 8.735 21.124 8.728 8.257.008 15.299-2.901 21.125-8.728a32.875 32.875 0 002.095-2.327l21.708 9.948c-.33 1.716-.502 3.5-.525 5.354v.059c.02 8.251 2.951 15.29 8.789 21.12 5.811 5.798 12.832 8.688 21.064 8.668 8.256.02 15.295-2.87 21.127-8.668a33.96 33.96 0 002.096-2.327l21.705 10.007a33.288 33.288 0 00-.408 5.294c-.006 8.275 2.904 15.335 8.73 21.179 4.816 4.799 10.463 7.61 16.936 8.437l3.258 28.858c-3.859 1.441-7.371 3.75-10.533 6.923-5.85 5.823-8.777 12.864-8.787 21.121.014 4.365.848 8.399 2.502 12.102l-31.891 24.784-4.771-42.995c3.955-1.457 7.547-3.805 10.766-7.041 5.867-5.825 8.814-12.866 8.846-21.119-.031-8.275-2.979-15.335-8.846-21.179-5.826-5.847-12.867-8.774-21.125-8.785-8.258.011-15.299 2.938-21.125 8.785a27.874 27.874 0 00-2.154 2.443l-21.531-9.891c.316-1.776.471-3.618.467-5.527.008-8.256-2.902-15.296-8.73-21.119-5.844-5.847-12.906-8.775-21.183-8.785-8.276.01-15.339 2.938-21.183 8.785-5.828 5.823-8.737 12.863-8.729 21.119-.008 8.274 2.901 15.334 8.729 21.178 5.844 5.826 12.906 8.735 21.183 8.728 8.277.008 15.339-2.901 21.183-8.728a26.015 26.015 0 002.096-2.385l21.59 9.949a29.726 29.726 0 00-.467 5.411c.008 4.526.881 8.694 2.619 12.508l-19.436 15.709c-5.156-3.959-11.13-5.938-17.925-5.934-8.276.011-15.337 2.938-21.182 8.786a28.076 28.076 0 00-2.212 2.443l-21.59-9.95a31.47 31.47 0 00.465-5.527c.009-8.255-2.901-15.294-8.729-21.119-5.845-5.826-12.905-8.735-21.183-8.728-8.259-.008-15.301 2.901-21.126 8.728a35.72 35.72 0 00-2.212 2.385l-21.473-9.891c.313-1.786.47-3.649.465-5.585-.004-4.586-.895-8.795-2.677-12.625l19.438-15.651c5.197 4.022 11.23 6.04 18.098 6.051 8.277-.011 15.339-2.939 21.185-8.785 5.827-5.825 8.737-12.864 8.729-21.12.008-8.256-2.902-15.296-8.729-21.121-5.846-5.825-12.907-8.734-21.185-8.727-8.276-.008-15.337 2.901-21.183 8.727-5.827 5.825-8.737 12.865-8.729 21.121.002 4.53.895 8.701 2.677 12.509l-19.437 15.651c-5.203-4.004-11.236-6.001-18.099-5.993-8.257-.008-15.299 2.901-21.125 8.728-5.848 5.863-8.777 12.941-8.787 21.236.01 8.255 2.939 15.295 8.787 21.119 5.826 5.827 12.867 8.736 21.125 8.728 8.277.009 15.337-2.9 21.183-8.728a43.764 43.764 0 002.037-2.21l21.59 9.892a29.827 29.827 0 00-.465 5.409c.012 8.295 2.94 15.373 8.787 21.236 5.825 5.827 12.867 8.736 21.126 8.728 8.277.009 15.338-2.9 21.183-8.728a26.672 26.672 0 002.096-2.443l21.706 9.95a30.617 30.617 0 00-.523 5.468c.011 8.257 2.939 15.296 8.788 21.121 5.845 5.827 12.905 8.736 21.182 8.727 8.257.01 15.298-2.899 21.125-8.727 5.848-5.825 8.775-12.864 8.789-21.121-.004-4.608-.895-8.838-2.678-12.684l19.379-15.709c4.09 3.187 8.705 5.106 13.852 5.761 6.07 54.517 12.143 109.032 18.213 163.548l-20.193 6.228-30.9-79.709h-31.426c-6.769.014-13.033-2.371-18.796-7.157-5.764-4.784-9.333-10.563-10.708-17.338l-.757-3.666h-37.71c-6.704-.003-12.911-2.368-18.623-7.098-.06-.021-.117-.041-.176-.06-5.763-4.782-9.332-10.563-10.708-17.336l-.756-3.609h-37.652c-6.806-.002-13.111-2.407-18.914-7.214-5.764-4.802-9.333-10.6-10.708-17.396l-.698-3.55H49.99a26.006 26.006 0 01-3.143-.231c-5.209-.75-9.767-3.078-13.676-6.982-4.782-4.805-7.168-10.602-7.158-17.397v-29.032c-.01-6.771 2.375-12.549 7.158-17.338 4.791-4.802 10.571-7.206 17.342-7.215h1.047v-29.033c-.009-6.787 2.376-12.586 7.158-17.396 4.83-4.801 10.649-7.206 17.458-7.215h3.201l7.391-29.033c1.675-6.808 5.497-12.626 11.465-17.454 6.016-4.762 12.418-7.128 19.204-7.098h29.621l.756-3.608c1.376-6.776 4.945-12.556 10.708-17.338 5.763-4.808 12.03-7.212 18.799-7.215h104.868c6.787.002 13.07 2.407 18.854 7.215 5.766 4.782 9.334 10.562 10.709 17.338l.697 3.608h37.652c6.779-.019 13.064 2.328 18.857 7.04.035.038.076.078.115.115 5.742 4.803 9.293 10.602 10.65 17.396h15.012c6.766.014 13.146 2.399 19.148 7.157 5.984 4.828 9.826 10.646 11.523 17.454l7.391 29.032h3.199c6.809-.011 12.629 2.375 17.459 7.157 4.781 4.809 7.168 10.607 7.158 17.396v29.032h1.047c6.77-.01 12.553 2.375 17.342 7.156 4.801 4.809 7.209 10.607 7.217 17.396v29.091c-.008 6.796-2.416 12.593-7.217 17.396-3.908 3.866-8.469 6.154-13.676 6.866-1.021.159-2.07.257-3.143.291h-12.104l-3.201 17.513c-1.211 6.814-4.646 12.632-10.301 17.455-5.662 4.766-11.891 7.134-18.682 7.098h-11.289l-.059.231c-1.275 15.894-9.809 26.25-25.605 31.071-15.783 4.788-21.971 21.115-18.563 48.988l-20.484 6.459-11.117-100.654 38.816-30.198c5.291 4.275 11.479 6.409 18.564 6.4 8.275.009 15.336-2.9 21.184-8.728 5.828-5.843 8.738-12.902 8.729-21.177.01-8.257-2.9-15.298-8.729-21.121-4.906-4.899-10.666-7.752-17.285-8.552l-3.26-28.626c4.008-1.446 7.637-3.792 10.883-7.04 5.848-5.844 8.777-12.903 8.789-21.179-.012-8.274-2.941-15.334-8.789-21.179-5.824-5.825-12.867-8.734-21.123-8.727-8.279-.008-15.34 2.901-21.184 8.727a41.234 41.234 0 00-2.328 2.561l-21.533-9.948a31.72 31.72 0 00.467-5.527v-.059c-.004-7.661-2.525-14.274-7.566-19.84-.371-.413-.76-.82-1.162-1.223-5.832-5.798-12.871-8.688-21.127-8.668-8.232-.02-15.254 2.87-21.064 8.668-.402.402-.791.81-1.164 1.223-.355.383-.705.771-1.049 1.164l-21.588-9.95c.313-1.756.467-3.578.463-5.468.01-8.257-2.901-15.297-8.728-21.121-5.826-5.846-12.868-8.775-21.125-8.785-8.255.012-15.297 2.941-21.121 8.787z"
      fill="#333"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M239.881 295.332c2.69-2.036 5.775-3.046 9.252-3.027 2.075-.016 4.015.332 5.819 1.048 1.81.764 3.479 1.906 5.006 3.434 2.295 2.291 3.713 4.928 4.248 7.911.168.93.246 1.9.232 2.909.014 4.171-1.48 7.762-4.48 10.764-3.026 3.021-6.633 4.534-10.826 4.539-4.19-.005-7.799-1.519-10.824-4.539-2.74-2.733-4.214-5.954-4.422-9.656a9.092 9.092 0 01-.059-1.107c-.015-4.19 1.479-7.798 4.48-10.82a22.98 22.98 0 011.574-1.456zM190.007 272.466v.93c-.006 4.19-1.519 7.8-4.538 10.822a18.432 18.432 0 01-1.688 1.514c-2.622 1.993-5.647 2.982-9.078 2.966-4.192.014-7.8-1.479-10.825-4.479-2.738-2.754-4.213-5.99-4.423-9.716a8.256 8.256 0 01-.116-1.106c.006-4.171 1.519-7.759 4.539-10.764a16.45 16.45 0 011.629-1.454c2.66-2.055 5.725-3.083 9.196-3.083 4.172.005 7.762 1.519 10.767 4.537 2.78 2.771 4.293 6.049 4.537 9.833zM115.75 238.255v.931c-.005 4.171-1.519 7.759-4.54 10.764a18.529 18.529 0 01-1.746 1.571c-2.637 1.971-5.643 2.96-9.02 2.967-4.192-.006-7.799-1.518-10.824-4.538-3.021-3.005-4.534-6.593-4.539-10.764.005-4.191 1.518-7.798 4.539-10.822 3.025-3.021 6.632-4.532 10.824-4.538 2.136-.001 4.115.388 5.937 1.163 1.754.771 3.363 1.895 4.829 3.375 2.324 2.319 3.76 4.977 4.307 7.971.104.628.181 1.268.233 1.92zM180.581 187.055c-.006 4.19-1.52 7.798-4.54 10.821-3.024 3.021-6.632 4.533-10.825 4.539-2.154-.015-4.152-.442-5.994-1.281-1.728-.725-3.318-1.81-4.771-3.258-2.352-2.359-3.787-5.073-4.307-8.146a17.05 17.05 0 01-.233-2.676c.006-4.172 1.519-7.759 4.54-10.764 3.005-3.021 6.594-4.533 10.766-4.539 4.193.006 7.801 1.519 10.825 4.539 3.019 3.006 4.533 6.593 4.539 10.765zM250.997 211.084l.523.582c.135.181.27.375.407.582 1.749 2.349 2.719 5.005 2.91 7.97v.989c-.006 4.171-1.519 7.759-4.54 10.764a17.45 17.45 0 01-1.687 1.514c-2.657 2.012-5.702 3.021-9.138 3.024-4.172-.006-7.761-1.518-10.766-4.538-3.021-3.005-4.534-6.593-4.539-10.764.005-4.191 1.518-7.798 4.539-10.822 3.005-3.02 6.594-4.532 10.766-4.537 4.192.005 7.801 1.518 10.824 4.537l.408.408c.1.104.197.202.293.291zM313.73 240.058c4.191-.014 7.799 1.479 10.824 4.481 3.021 3.022 4.533 6.63 4.541 10.821-.008 4.189-1.52 7.799-4.541 10.821a16.425 16.425 0 01-2.211 1.805c-2.539 1.782-5.41 2.675-8.613 2.675-2.104.003-4.063-.386-5.877-1.163h-.059c-1.744-.741-3.355-1.846-4.83-3.316-2.363-2.366-3.797-5.1-4.307-8.203-.074-.485-.131-.99-.176-1.513a9.836 9.836 0 01-.059-1.105c.006-4.191 1.52-7.799 4.541-10.821a15.938 15.938 0 011.629-1.397c2.637-2.058 5.679-3.085 9.138-3.085zM219.047 124.043c3.024-3 6.632-4.494 10.824-4.479 4.172-.015 7.761 1.479 10.766 4.479 2.776 2.772 4.29 6.031 4.54 9.775v1.048c-.006 4.171-1.52 7.759-4.54 10.764a18.135 18.135 0 01-1.688 1.512c-2.621 2.014-5.648 3.022-9.078 3.025-4.192-.006-7.8-1.519-10.824-4.537-3.002-3.005-4.495-6.593-4.48-10.764-.015-4.192 1.478-7.799 4.48-10.823zM294.932 156.8c2.66-2.014 5.725-3.021 9.195-3.024 4.18-.007 7.748 1.447 10.711 4.363l.057.174c.223.171.434.345.641.523l.057.059c2.342 2.599 3.602 5.643 3.783 9.135.004.311.004.622 0 .931v.059c-.006 4.205-1.5 7.794-4.48 10.764a13.57 13.57 0 01-1.746 1.454c-2.594 1.972-5.6 2.96-9.021 2.967-4.225.011-7.836-1.463-10.822-4.421-2.705-2.705-4.16-5.924-4.365-9.658a8.234 8.234 0 01-.059-1.105v-.059c.01-3.884 1.291-7.238 3.842-10.065l.057-.059c.166-.179.342-.353.525-.523l.057-.174c.513-.5 1.036-.947 1.568-1.341zM378.561 187.812c4.172.004 7.762 1.517 10.766 4.537 3.02 3.005 4.533 6.592 4.537 10.764-.004 4.191-1.518 7.798-4.537 10.821a16.102 16.102 0 01-2.211 1.863c-2.518 1.782-5.367 2.675-8.555 2.676-2.137.001-4.115-.387-5.938-1.164-1.752-.77-3.365-1.895-4.828-3.375-2.748-2.712-4.26-5.893-4.541-9.54a13.452 13.452 0 01-.059-1.281c.025-4.172 1.557-7.759 4.6-10.764.459-.471.945-.896 1.455-1.279 2.68-2.161 5.783-3.246 9.311-3.258zM388.162 274.327c1.996-.014 3.861.316 5.586.988 1.887.757 3.611 1.921 5.182 3.491 3.018 3.025 4.531 6.632 4.537 10.823-.006 4.17-1.52 7.757-4.537 10.764-3.006 3.021-6.596 4.531-10.768 4.538-2.266.007-4.359-.418-6.285-1.281-1.635-.777-3.148-1.864-4.539-3.257-2.408-2.405-3.842-5.18-4.307-8.321a14.153 14.153 0 01-.174-2.442c-.016-4.191 1.479-7.798 4.48-10.823a17.356 17.356 0 011.977-1.687c2.579-1.868 5.53-2.798 8.848-2.793z"
      fill="#333"
      fillRule="evenodd"
    />
  </svg>
);

const DesignerIcon = () => (
  <svg viewBox="0 0 22.175 22.175" height={16} width={16}>
    <g data-name="Layer 2">
      <g data-name="Layer 1">
        <path
          d="M22.077 17.77l-6.716-6.71L20.6 5.822a.324.324 0 00.086-.146l1.476-5.23a.336.336 0 00-.415-.415l-5.24 1.479a.336.336 0 00-.145.086l-5.236 5.233L4.389.1a.336.336 0 00-.475 0L.1 3.912a.337.337 0 000 .475l6.736 6.731-4.478 4.473c-.168-.195-.431-.44-.674-.2s0 .506.2.672L.444 17.5a1.524 1.524 0 000 2.149l2.085 2.078a1.525 1.525 0 002.152 0l1.438-1.436c.161.193.422.407.652.176s.017-.491-.178-.651l4.473-4.47 6.716 6.71a.336.336 0 00.475 0l3.818-3.814a.34.34 0 00.002-.472zM21.352.841l-1.158 4.1L17.243 2zM.81 4.149L4.152.811 5.445 2.1 4.223 3.324A.336.336 0 104.7 3.8l1.22-1.222L7.214 3.87 5.1 5.988a.336.336 0 10.475.475l2.114-2.118 1.293 1.292-1.223 1.222a.336.336 0 00.476.475l1.223-1.222L10.65 7.3l-3.341 3.343zM16.6 2.308l1.407 1.4-13.768 13.76-1.406-1.4zM4.208 21.255a.853.853 0 01-1.2 0L.92 19.177a.851.851 0 010-1.2l1.44-1.439 3.286 3.279zm1.912-1.911l-1.405-1.4L18.482 4.186l1.4 1.4zm11.9 2l-6.478-6.472 3.341-3.339 1.172 1.171-2.119 2.118a.336.336 0 00.476.475l2.119-2.118 1.293 1.292-1.224 1.223a.336.336 0 00.476.475l1.224-1.221 1.293 1.292-2.118 2.118a.336.336 0 00.474.475l2.12-2.118 1.293 1.292z"
          data-name="learning tool"
        />
      </g>
    </g>
  </svg>
);

const Analytics1Icon = () => (
  <svg viewBox="0 0 24 24" height={16} width={16}>
    <defs>
      <style>
        {
          ".a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;fill-rule:evenodd}"
        }
      </style>
    </defs>
    <path className="a" d="M2 2v18a2 2 0 002 2h18" />
    <path
      className="a"
      d="M6 18V8.5A3.5 3.5 0 019.5 5 3.5 3.5 0 0113 8.5v2.298A7.202 7.202 0 0020.202 18H22"
    />
  </svg>
);

const Analytics2Icon = () => (
  <svg data-name="Layer 1" width={16} height={16} viewBox="0 0 512 512">
    <path d="M477.64 244.15h-36.72c8-26.25 19.07-45.37 36.75-45.42a11.85 11.85 0 000-23.7c-33.57.09-50.48 30.51-61.23 69.12H338c-6.86-78.76-18.73-157.52-70.15-167.85V34.36a11.85 11.85 0 00-23.7 0v42.35c-38 9.49-51.89 64.79-65.25 118.58-4.15 16.68-8.34 33.53-13.16 48.86H34.36a11.85 11.85 0 100 23.7H56.6c4.82 19.7 19.79 60.7 61.15 60.7 33.12 0 51.73-25.87 64.89-60.7h61.51v209.79a11.85 11.85 0 0023.7 0V267.85h48.33c.2 2.59.41 5.21.62 7.77 6.28 79.53 11.69 148.23 53.6 148.23 36.75 0 46-53.42 55.75-110 2.64-15.3 5.4-31.13 8.7-46h42.79a11.85 11.85 0 100-23.7zm-359.89 60.69c-21.61 0-32-22-36.54-37h75.84c-9.53 21.95-21.7 37-39.3 37zm72.74-60.69c4.12-14 7.78-28.59 11.4-43.14 10.61-42.72 21.56-86.55 42.26-98.75v141.89zm77.36 0V101.48c31.1 13.24 40.72 79 46.36 142.67zm134.94 65.69c-7 40.24-15.6 90.31-32.39 90.31-20 0-25.77-73.06-30-126.4-.15-1.95-.31-3.94-.47-5.9h70.67c-2.92 13.85-5.41 28.15-7.81 41.99zM318 46.21h54.74a11.85 11.85 0 100-23.7H318a11.85 11.85 0 000 23.7z" />
    <path d="M318 81.26h35.27a11.85 11.85 0 100-23.7H318a11.85 11.85 0 000 23.7z" />
  </svg>
);

const Integrations1Icon = () => (
  <svg viewBox="0 0 64 64" height={16} width={16}>
    <path d="M18 30.5a7.508 7.508 0 007.5 7.5h14a7.5 7.5 0 00.5-14.983V23a8 8 0 00-16 0v.157a7.535 7.535 0 00-6 7.343zm7.076-5.478a1 1 0 00.924-1V23a6 6 0 0112 0v1a1 1 0 001 1h.5a5.5 5.5 0 010 11h-14a5.5 5.5 0 01-.424-10.978zM62 2H44a1 1 0 00-1 1v14a1 1 0 001 1h5.719l-.689 2.757A1 1 0 0050 22h6a1 1 0 00.97-1.243L56.281 18H62a1 1 0 001-1V3a1 1 0 00-1-1zM51.281 20l.5-2h2.438l.5 2zM61 16H45v-2h16zm0-4H45V4h16zM3 21h10a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v17a1 1 0 001 1zM4 4h8v2H4zm0 4h8v7H4zm0 9h8v2H4z" />
    <path d="M6 56H8V58H6z" />
    <path d="M6 48H8V50H6z" />
    <path d="M3 62h18a1 1 0 001-1V45a1 1 0 00-1-1H10v-2a1 1 0 00-2 0v2H3a1 1 0 00-1 1v16a1 1 0 001 1zm10-16h7v6h-7zm0 8h7v6h-7zm-9-8h7v6H4zm0 8h7v6H4zM6 39a1 1 0 002 0 1 1 0 012 0 1 1 0 002 0 3 3 0 00-6 0z" />
    <path d="M3 40a1 1 0 001-1 5 5 0 0110 0 1 1 0 002 0 7 7 0 00-14 0 1 1 0 001 1z" />
    <path d="M16 18H18V20H16z" />
    <path d="M20 18H22V20H20z" />
    <path d="M24 48H26V50H24z" />
    <path d="M28 48H30V50H28z" />
    <path d="M28 44H30V46H28z" />
    <path d="M28 40H30V42H28z" />
    <path d="M41 44H43V46H41z" />
    <path d="M37 44H39V46H37z" />
    <path d="M37 40H39V42H37z" />
    <path d="M52 24H54V26H52z" />
    <path d="M48 24H50V26H48z" />
    <path d="M46 42v19a1 1 0 001 1h14a1 1 0 001-1V42a1 1 0 00-1-1H47a1 1 0 00-1 1zm2 1h12v17H48z" />
    <path d="M53 56H55V58H53z" />
  </svg>
);

const Integrations2Icon = () => (
  <svg width={16} height={16} viewBox="0 0 64 64" xmlSpace="preserve">
    <path d="M58 28c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .46.094.895.237 1.307l-5.589 3.726a6.893 6.893 0 00-3.774-1.032A4.007 4.007 0 0041 25c0-.188-.017-.372-.028-.558l10.009-10.009A3.947 3.947 0 0053 15c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .74.215 1.424.567 2.019l-9.062 9.062a9.032 9.032 0 00-3.333-4.435l2.558-7.674c.091.007.178.028.27.028 2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 1.405.731 2.637 1.829 3.351l-2.439 7.317A8.943 8.943 0 0032 16a8.925 8.925 0 00-3.388.673l-2.441-7.322A3.994 3.994 0 0028 6c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c.092 0 .179-.021.27-.027l2.558 7.674a9.011 9.011 0 00-3.331 4.436l-9.064-9.064A3.947 3.947 0 0015 11c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c.74 0 1.424-.215 2.019-.567l8.894 8.894a6.934 6.934 0 00-4.682 4.905 6.96 6.96 0 00-1.873.805l-5.596-3.731C9.906 24.895 10 24.46 10 24c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4a3.97 3.97 0 002.653-1.029l5.108 3.405a6.949 6.949 0 00-1.633 5.942l-2.837 1.418A3.992 3.992 0 006 36c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4c0-.124-.026-.242-.037-.363l2.829-1.414A7.006 7.006 0 0019 42h1.586l-7.567 7.567A3.947 3.947 0 0011 49c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4c0-.74-.215-1.424-.567-2.019L23.414 42h4.26l-3.435 12.024C24.158 54.019 24.082 54 24 54c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4a3.991 3.991 0 00-1.856-3.365L29.754 42h4.492l3.61 12.635A3.991 3.991 0 0036 58c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4c-.082 0-.158.019-.239.024L36.326 42h4.26l8.981 8.981A3.947 3.947 0 0049 53c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4c-.74 0-1.424.215-2.019.567L43.414 42H45c2.698 0 5.039-1.537 6.208-3.778l2.829 1.414c-.011.122-.037.24-.037.364 0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4c-1.365 0-2.57.689-3.292 1.736l-2.837-1.418c.082-.428.129-.867.129-1.318a6.975 6.975 0 00-1.759-4.626l5.105-3.404A3.97 3.97 0 0058 28zM53 9c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM40 4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM22 6c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zM6 42c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm5 13c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm13 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm18-2c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm13-5c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2zm3-15c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-16c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM9 11c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zM6 26c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm39 14H19c-2.757 0-5-2.243-5-5a4.967 4.967 0 014.231-4.934.997.997 0 00.835-.836c.378-2.449 2.45-4.228 4.953-4.228h.006c.541.038.97-.359 1.035-.875A7.004 7.004 0 0132 18c3.86 0 7 3.141 7 7 0 .319-.03.668-.09 1.064a1 1 0 001.357 1.081c1.343-.532 2.732.529 2.739 1.759a1.004 1.004 0 00.328.942c.227.196.53.281.826.23.302-.051.577-.076.84-.076 2.757 0 5 2.243 5 5s-2.243 5-5 5z" />
  </svg>
);

const SecurityIcon = () => (
  <svg
    x="0px"
    y="0px"
    width="14"
    height="14"
    viewBox="0 0 744.191 744.191"
    xmlSpace="preserve"
  >
    <path d="M372.762 744.191l-4.216-.676c-178.111-42.031-302.45-199.174-302.45-382.168v-255.57l12.406-.554C181.933 100.6 280.828 66.117 364.486 5.515L372.104 0l7.618 5.515c83.684 60.603 182.57 95.085 285.967 99.709l12.406.553v255.579c0 182.994-124.348 340.136-302.39 382.152l-2.943.683zM92.069 130.478v230.87c0 170.084 115.015 316.259 280.019 356.309 165.021-40.067 280.036-186.232 280.036-356.309v-230.87c-100.869-6.753-197.244-40.639-280.02-98.505-82.757 57.857-179.124 91.752-280.035 98.505z" />
    <path d="M372.528 644.934l-2.935-.493c-130.348-30.744-221.425-145.828-221.425-279.855V177.678l8.268-.373c76.177-3.419 148.996-28.803 210.577-73.416l5.082-3.679 5.082 3.679c61.615 44.621 134.425 70.004 210.568 73.416l8.268.373v186.907c0 134.019-91.077 249.103-221.477 279.872l-2.008.477zM165.484 194.153v170.44c0 125.432 84.878 233.208 206.603 262.652 121.785-29.522 206.612-137.267 206.612-262.652v-170.44c-74.446-4.848-145.586-29.842-206.604-72.619-60.974 42.777-132.13 67.771-206.611 72.619z" />
    <path d="M430.033 347.149V314.9c0-31.297-25.308-56.811-56.379-56.811h-3.117c-31.072 0-56.326 25.514-56.326 56.811v32.249h-20.596v141.81h156.943v-141.81h-20.525zm-94.056-32.258c0-19.176 15.514-34.786 34.561-34.786h3.117c19.091 0 34.543 15.609 34.543 34.786v32.25h-72.221v-32.25z" />
  </svg>
);

const ApiReferenceIcon = () => (
  <svg height={16} viewBox="0 0 32 32" width={16}>
    <path d="M4 20L4 22 8.586 22 2 28.586 3.414 30 10 23.414 10 28 12 28 12 20 4 20z" />
    <path d="M27.17 26L24.59 28.58 26 30 30 26 26 22 24.58 23.41 27.17 26z" />
    <path d="M18.83 26L21.41 23.42 20 22 16 26 20 30 21.42 28.59 18.83 26z" />
    <path d="M25.7 9.3l-7-7A.909.909 0 0018 2H8a2.006 2.006 0 00-2 2v12h2V4h8v6a2.006 2.006 0 002 2h6v6h2v-8a.91.91 0 00-.3-.7zM18 10V4.4l5.6 5.6z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const Trigger1Icon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <path
      d="M13 16.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM8.528 13H7.096a.5.5 0 00-.468.325l-1.125 3a.5.5 0 00.468.675h.779l-.773 2.318a.518.518 0 00.926.446l2.625-4.038A.47.47 0 009.134 15H8.5l.497-1.324A.5.5 0 008.528 13zm7.769-8.709a1 1 0 00-.001 1.415L19.586 9H13l-.225-.004A6 6 0 017 3a1 1 0 10-2 0l.004.25A8 8 0 0013 11h6.589l-3.293 3.293a1 1 0 101.415 1.414l4.996-4.997a1 1 0 000-1.414l-4.996-5.004a1 1 0 00-1.414 0z"
      fill="#212121"
    />
  </svg>
);

const Trigger2Icon = () => (
  <svg data-name="Layer 1" height={16} viewBox="0 0 32 32" width={16}>
    <path d="M15.67 24L13.934 23 16.221 19 12.332 19 16.325 12 18.062 13 15.778 17 19.668 17 15.67 24z" />
    <path d="M4 18A12 12 0 1016 6h-4V1L6 7l6 6V8h4A10 10 0 116 18z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const Trigger3Icon = () => (
  <svg data-name="Layer 1" height={16} viewBox="0 0 32 32" width={16}>
    <path d="M14 28a10 10 0 010-20h4v5l6-6-6-6v5h-4a12 12 0 000 24z" />
    <path d="M11.67 24L9.934 23 12.221 19 8.332 19 12.325 12 14.062 13 11.778 17 15.668 17 11.67 24z" />
    <path d="M20 20h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 002-2v-6a2.002 2.002 0 00-2-2zM28 30h-2a2.002 2.002 0 01-2-2v-6a2.002 2.002 0 012-2h2a2.002 2.002 0 012 2v6a2.002 2.002 0 01-2 2zm-2-8v6h2v-6z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const Pipeline0Icon = () => (
  <svg viewBox="0 0 66 66" xmlSpace="preserve">
    <path d="M63.82 29.5c0-1.51-1.05-2.77-2.46-3.11V8.49c1.41-.34 2.46-1.6 2.46-3.11 0-1.77-1.44-3.21-3.21-3.21H41.52c-1.77 0-3.21 1.44-3.21 3.21 0 1.61 1.2 2.94 2.75 3.17v17.79a3.21 3.21 0 00-2.75 3.17c0 1.14.61 2.14 1.51 2.71-.9.57-1.51 1.57-1.51 2.71 0 1.61 1.2 2.94 2.75 3.17v1.54c0 .96-.79 1.75-1.75 1.75h-2.8a3.207 3.207 0 00-3.2-3.05c-1.14 0-2.14.61-2.71 1.51-.57-.9-1.57-1.51-2.71-1.51-1.72 0-3.11 1.36-3.2 3.05H8.59a3.207 3.207 0 00-3.2-3.05c-1.77 0-3.21 1.44-3.21 3.21v19.09c0 1.77 1.44 3.21 3.21 3.21 1.4 0 2.58-.91 3.02-2.16h16.43c.44 1.25 1.62 2.16 3.02 2.16 1.14 0 2.14-.61 2.71-1.51.57.9 1.57 1.51 2.71 1.51 1.4 0 2.59-.91 3.02-2.16h10.71c7.9 0 14.33-6.43 14.33-14.33v-9.31c1.41-.34 2.46-1.6 2.46-3.11 0-1.14-.61-2.14-1.51-2.71.92-.59 1.53-1.59 1.53-2.73zM7.61 60.63a2.21 2.21 0 01-4.42 0V41.54a2.21 2.21 0 014.42 0v19.09zm.99.05c0-.02.01-.03.01-.05V42.38h16.05v18.25c0 .02 0 .03.01.05H8.6zm21.49-.05a2.21 2.21 0 01-4.42 0V41.54a2.21 2.21 0 014.42 0v19.09zm5.42 0a2.21 2.21 0 01-4.42 0V41.54a2.21 2.21 0 014.42 0v19.09zM39.3 5.37c0-1.22.99-2.21 2.21-2.21H60.6a2.21 2.21 0 010 4.42H41.52c-1.22.01-2.22-.99-2.22-2.21zm21.06 3.22v17.7H42.05V8.59h18.31zm0 38.76c0 7.35-5.98 13.33-13.33 13.33H36.51c0-.02.01-.03.01-.05V42.38h2.79c1.52 0 2.75-1.23 2.75-2.75v-1.49h18.31v9.21zm2.46-12.43c0 1.13-.86 2.06-1.96 2.19-.08.01-.17.03-.26.03H41.52a2.21 2.21 0 010-4.42H60.6c1.22-.01 2.22.98 2.22 2.2zm-2.22-3.21H41.52a2.21 2.21 0 010-4.42H60.6c.09 0 .17.02.26.03 1.1.13 1.96 1.05 1.96 2.19 0 1.21-1 2.2-2.22 2.2z" />
  </svg>
);

const Pipeline1Icon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24">
    <path d="M22 14h-2v2h-6v-3h2v-2h-2V6a2 2 0 00-2-2H4V2H2v8h2V8h6v3H8v2h2v5a2 2 0 002 2h8v2h2" />
  </svg>
);

const Pipeline2Icon = () => (
  <svg width={16} height={16} viewBox="0 0 32 32" xmlSpace="preserve">
    <path d="M18.8 25c-.5.5-.8 1.2-.8 2v2c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-2c0-.8-.3-1.5-.8-2H18.8zM13.2 7c.5-.5.8-1.2.8-2V3c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v2c0 .8.3 1.5.8 2h10.4zM18.7 20h1.1c.1 0 .2.1.2.2V23h8v-4c0-3.9-3.1-7-7-7h-2.3c-.3-.6-1-1-1.7-1h-2c-.7 0-1.4.4-1.7 1h-1.1c-.1 0-.2-.1-.2-.2V9H4v4c0 3.9 3.1 7 7 7h2.3c.3.6 1 1 1.7 1h2c.7 0 1.4-.4 1.7-1z" />
  </svg>
);

const Pipeline3Icon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24">
    <path d="M16 9v2H8V9h2V8H4v2H2V2h2v2h8a2 2 0 012 2v3h2m-6 6v3a2 2 0 002 2h8v2h2v-8h-2v2h-6v-1h2v-2H8v2h2z" />
  </svg>
);

const DataOpsIcon = () => (
  <svg
    x="0px"
    y="0px"
    width={16}
    height={16}
    viewBox="0 0 161.5793 198.2335"
    xmlSpace="preserve"
  >
    <path
      fill="none"
      d="M10.11 47.216l63.212 44.883c3.972 2.824 10.95 2.824 14.926 0l63.21-44.883c1.39-.985 2.178-2.098 2.118-2.98-.063-.881-1-1.874-2.508-2.653L89.599 9.822c-2.347-1.214-5.58-1.819-8.814-1.819-3.233 0-6.467.605-8.815 1.818L10.502 41.584C9 42.36 8.066 43.353 8.004 44.24c-.063.882.724 1.995 2.107 2.976z"
    />
    <path d="M5.478 53.74l63.211 44.882c3.393 2.408 7.742 3.611 12.096 3.611 4.351 0 8.703-1.205 12.095-3.61l63.21-44.884c3.736-2.65 5.728-6.32 5.466-10.064-.263-3.744-2.748-7.096-6.816-9.198L93.271 2.716c-6.998-3.621-17.97-3.621-24.973 0L6.83 34.477C2.767 36.578.287 39.931.023 43.68c-.263 3.744 1.727 7.412 5.455 10.06zm5.024-12.157L71.97 9.822c2.348-1.214 5.582-1.819 8.815-1.819 3.234 0 6.467.605 8.814 1.818l61.469 31.762c1.508.78 2.445 1.772 2.508 2.653.06.882-.729 1.996-2.117 2.98L88.248 92.099c-3.977 2.824-10.954 2.824-14.926 0L10.111 47.216c-1.383-.98-2.17-2.094-2.107-2.977.062-.886.996-1.879 2.498-2.656z" />
    <path d="M154.74 66.478l-3.672 7.105c1.508.78 2.445 1.772 2.508 2.653.06.882-.729 1.995-2.117 2.98l-63.211 44.883c-3.977 2.824-10.954 2.824-14.926 0L10.111 79.216c-1.383-.98-2.17-2.094-2.107-2.976.062-.887.996-1.88 2.498-2.657L6.83 66.478c-4.063 2.1-6.543 5.453-6.807 9.2-.263 3.745 1.727 7.413 5.455 10.062l63.211 44.882c3.393 2.408 7.742 3.611 12.096 3.611 4.351 0 8.703-1.205 12.095-3.61l63.21-44.883c3.736-2.65 5.728-6.32 5.466-10.065-.263-3.744-2.748-7.096-6.816-9.197z" />
    <path d="M154.74 98.478l-3.672 7.105c1.508.78 2.445 1.772 2.508 2.653.06.882-.729 1.995-2.117 2.98l-63.211 44.883c-3.977 2.824-10.954 2.824-14.926 0l-63.211-44.883c-1.383-.98-2.17-2.094-2.107-2.976.062-.887.996-1.88 2.498-2.657L6.83 98.478c-4.063 2.1-6.543 5.453-6.807 9.2-.263 3.745 1.727 7.413 5.455 10.062l63.211 44.882c3.393 2.408 7.742 3.611 12.096 3.611 4.351 0 8.703-1.205 12.095-3.61l63.21-44.883c3.736-2.65 5.728-6.32 5.466-10.065-.263-3.744-2.748-7.096-6.816-9.197z" />
    <path d="M154.74 130.477l-3.672 7.106c1.508.78 2.445 1.772 2.508 2.653.06.882-.729 1.996-2.117 2.98l-63.211 44.883c-3.977 2.824-10.954 2.824-14.926 0l-63.211-44.883c-1.383-.98-2.17-2.094-2.107-2.977.062-.886.996-1.879 2.498-2.656l-3.672-7.105c-4.063 2.1-6.543 5.453-6.807 9.2-.263 3.745 1.727 7.413 5.455 10.061l63.211 44.883c3.393 2.408 7.742 3.611 12.096 3.611 4.351 0 8.703-1.205 12.095-3.61l63.21-44.883c3.736-2.65 5.728-6.32 5.466-10.065-.263-3.744-2.748-7.096-6.816-9.198z" />
  </svg>
);

const ValueType1Icon = () => (
  <svg fill="none" height={16} strokeWidth={1.5} viewBox="0 0 24 24" width={16}>
    <path
      d="M10 3H5.6a.6.6 0 00-.6.6v16.8a.6.6 0 00.6.6H10M11 7h2M11 12h2M11 17h2M14 3h4.4a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AssetIcon = () => (
  <svg width={16} height={16} viewBox="0 0 20 20" fill="none">
    <path
      d="M4.5 3A1.5 1.5 0 003 4.5v2a.5.5 0 01-1 0v-2A2.5 2.5 0 014.5 2h2a.5.5 0 010 1h-2zm11 14a1.5 1.5 0 001.5-1.5v-2a.5.5 0 011 0v2a2.5 2.5 0 01-2.5 2.5h-2a.5.5 0 010-1h2zM17 4.5A1.5 1.5 0 0015.5 3h-2a.5.5 0 010-1h2A2.5 2.5 0 0118 4.5v2a.5.5 0 01-1 0v-2zM4.5 17A1.5 1.5 0 013 15.5v-2a.5.5 0 00-1 0v2A2.5 2.5 0 004.5 18h2a.5.5 0 000-1h-2zm6.733-10.097a1.5 1.5 0 00-2.466 0l-2.592 3.743C5.487 11.641 6.2 13 7.41 13h5.183c1.21 0 1.921-1.359 1.233-2.354l-2.592-3.743zm-1.644.57a.5.5 0 01.822 0l2.592 3.742a.5.5 0 01-.412.785H7.41a.5.5 0 01-.412-.785L9.59 7.472z"
      fill="#212121"
    />
  </svg>
);

const AssetMonitoringIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16}>
    <defs>
      <style>
        {".a{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}"}
      </style>
    </defs>
    <path
      className="a"
      d="M11.931 20.5a3 3 0 001.191 2.614l.24.386M7.638 23.5l.24-.386A3 3 0 009.069 20.5"
    />
    <path className="a" d="M5.9 23.5L15.1 23.5" />
    <path className="a" d="M0.5 17.5L20.5 17.5" />
    <path
      className="a"
      d="M20.5 13.5v6a1 1 0 01-1 1h-18a1 1 0 01-1-1v-12a1 1 0 011-1h12M19.5.5a4 4 0 014 4c0 1.781-2.6 5.241-3.608 6.514a.5.5 0 01-.784 0C18.1 9.74 15.5 6.281 15.5 4.5a4 4 0 014-4z"
    />
    <circle className="a" cx={19.5} cy={4.5} r={1.5} />
  </svg>
);

const CustomTypeIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
    <path
      d="M3.5 5.25c0-.966.784-1.75 1.75-1.75h3a.75.75 0 000-1.5h-3A3.25 3.25 0 002 5.25v3a.75.75 0 001.5 0v-3zm17 0a1.75 1.75 0 00-1.75-1.75h-3a.75.75 0 010-1.5h3A3.25 3.25 0 0122 5.25v3a.75.75 0 01-1.5 0v-3zM5.25 20.5a1.75 1.75 0 01-1.75-1.75v-3a.75.75 0 00-1.5 0v3A3.25 3.25 0 005.25 22h3a.75.75 0 000-1.5h-3zm15.25-1.75a1.75 1.75 0 01-1.75 1.75h-3a.75.75 0 000 1.5h3A3.25 3.25 0 0022 18.75v-3a.75.75 0 00-1.5 0v3zM13.82 8.227a2.25 2.25 0 00-3.64 0l-3.054 4.2C6.044 13.914 7.106 16 8.946 16h6.108c1.84 0 2.902-2.086 1.82-3.573l-3.054-4.2z"
      fill="#212121"
    />
  </svg>
);

const ConnectionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg x="0px" y="0px" viewBox="0 0 64 64" xmlSpace="preserve" {...props}>
    <path d="M24 32c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8zm14 0c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6z" />
    <path d="M57 27a5.01 5.01 0 00-4.899 4H47v-6a1 1 0 00-.504-.868l-3.318-1.896 7.069-7.069A4.969 4.969 0 0053 16c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5c0 1.017.309 1.962.833 2.753l-7.455 7.455L33 16.42v-4.521A5.009 5.009 0 0037 7c0-2.757-2.243-5-5-5s-5 2.243-5 5a5.01 5.01 0 004 4.899v4.521l-8.378 4.788-7.455-7.455A4.969 4.969 0 0016 11c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.969 4.969 0 002.753-.833l7.069 7.069-3.318 1.896A1 1 0 0017 25v6h-5.101A5.01 5.01 0 007 27c-2.757 0-5 2.243-5 5s2.243 5 5 5a5.01 5.01 0 004.899-4H17v6a1 1 0 00.504.868l3.318 1.896-7.069 7.069A4.969 4.969 0 0011 48c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5a4.969 4.969 0 00-.833-2.753l7.455-7.455L31 47.58v4.521A5.009 5.009 0 0027 57c0 2.757 2.243 5 5 5s5-2.243 5-5a5.01 5.01 0 00-4-4.899V47.58l8.378-4.788 7.455 7.455A4.969 4.969 0 0048 53c0 2.757 2.243 5 5 5s5-2.243 5-5-2.243-5-5-5a4.969 4.969 0 00-2.753.833l-7.069-7.069 3.318-1.896A1 1 0 0047 39v-6h5.101A5.009 5.009 0 0057 37c2.757 0 5-2.243 5-5s-2.243-5-5-5zM53 8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm-42 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM7 35c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm4 21c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm42-6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM29 7c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3zm6 50c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm10-18.58l-13 7.429-13-7.429V25.58l13-7.429 13 7.429v12.84zM57 35c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
  </svg>
);

const DashboardIcon = () => (
  <svg height={16} viewBox="0 0 32 32" width={16}>
    <path d="M24 21H26V26H24z" />
    <path d="M20 16H22V26H20z" />
    <path d="M11 26a5.006 5.006 0 01-5-5h2a3 3 0 103-3v-2a5 5 0 010 10z" />
    <path d="M28 2H4a2.002 2.002 0 00-2 2v24a2.002 2.002 0 002 2h24a2.003 2.003 0 002-2V4a2.002 2.002 0 00-2-2zm0 9H14V4h14zM12 4v7H4V4zM4 28V13h24l.002 15z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

const RESTLogoIcon = () => (
  <svg width="100px" height="100px" viewBox="0 0 100 100" fill="none">
    <path
      d="M71.384 77.602a34.958 34.958 0 01-38.75 2.742 34.963 34.963 0 01-16.398-21.15 34.978 34.978 0 0112.65-37.128 34.954 34.954 0 0148.913 6.588 34.976 34.976 0 01-6.415 48.948"
      fill="#0078D4"
    />
    <path
      d="M49.96 18.322A31.633 31.633 0 0020.73 37.86a31.655 31.655 0 006.858 34.489A31.637 31.637 0 0081.6 49.97a31.689 31.689 0 00-9.278-22.368 31.672 31.672 0 00-22.362-9.28zm21.194 10.654a30.353 30.353 0 01-8.708 3.319 36.91 36.91 0 00-5.278-11.29 29.839 29.839 0 0113.986 7.97zm-21.194-8.86c1.5 0 2.996.113 4.477.337l-.03.028c2.598 2.755 4.754 7.041 6.298 12.182a61.563 61.563 0 01-22.43-.07c1.586-5.096 3.74-9.232 6.244-11.89l-.074-.07a29.872 29.872 0 015.515-.516zm-8.246 1.17a36.69 36.69 0 00-5.194 10.923 23.938 23.938 0 01-7.816-3.167 29.865 29.865 0 0113.01-7.756zm-13.485 49.11a22.59 22.59 0 017.339-3.12 28.843 28.843 0 005.553 11.209 29.884 29.884 0 01-12.894-8.088h.002zm26.381 9.062c-3.515.554-7.1.476-10.588-.232l.162-.187c-3.049-2.63-5.381-6.794-6.871-12.178a60.984 60.984 0 0124.186.022c-1.51 5.509-3.89 9.853-6.954 12.497l.065.078zm3.004-.635a29.379 29.379 0 005.654-11.515 27.992 27.992 0 018.135 3.397 29.854 29.854 0 01-13.791 8.118h.002zm6.093-13.263c.336-1.465.61-3.004.83-4.604-.618.166-1.25.322-1.898.468a50.934 50.934 0 01-.7 3.708 62.107 62.107 0 00-25.07-.008c-.266-1.143-.5-2.33-.694-3.568-.019-.12-.033-.24-.05-.36-.646-.16-1.272-.33-1.886-.512.052.385.1.769.163 1.148.2 1.288.447 2.522.724 3.714a24.26 24.26 0 00-8.097 3.507 29.779 29.779 0 01.457-38.687 25.35 25.35 0 008.54 3.556 59.546 59.546 0 00-.764 3.109c-.112.514-.2 1.04-.3 1.563.624-.172 1.267-.33 1.921-.481.048-.232.087-.47.137-.7.231-1.061.485-2.092.761-3.09a60.536 60.536 0 0011.979 1.152c3.84.013 7.673-.343 11.446-1.062.3 1.134.56 2.313.799 3.511.646.133 1.279.28 1.898.44a63.67 63.67 0 00-.966-4.328 31.591 31.591 0 009.464-3.72 29.77 29.77 0 01.23 39.045 29.523 29.523 0 00-8.93-3.805l.006.004z"
      fill="#83B9F9"
    />
    <path
      d="M40.886 55.28h-3.097l-1.86-3.08a10.94 10.94 0 00-.4-.625 3.536 3.536 0 00-.387-.471 1.555 1.555 0 00-.41-.3 1.042 1.042 0 00-.462-.1h-.725v4.581h-2.697v-11.97h4.271c2.903 0 4.354 1.084 4.354 3.254a3.223 3.223 0 01-.734 2.111c-.24.29-.526.538-.847.734a4.365 4.365 0 01-1.105.484v.034c.187.06.362.151.518.27.173.132.335.279.483.438.16.17.308.35.447.539.142.191.271.38.387.563l2.264 3.538zm-7.341-9.946v3.329h1.168a1.934 1.934 0 001.392-.5 1.668 1.668 0 00.535-1.26c0-1.045-.626-1.568-1.877-1.568l-1.218-.001zM49.176 55.28h-7.174V43.315h6.899v2.198h-4.204v2.658h3.912v2.185h-3.912v2.738h4.48v2.186zM50.544 54.82v-2.67a5.141 5.141 0 001.577.914c.55.199 1.132.3 1.718.3.299.004.597-.027.889-.092.224-.05.438-.135.633-.254.157-.095.287-.227.38-.385a1.044 1.044 0 00-.075-1.105 2.14 2.14 0 00-.545-.508 5.7 5.7 0 00-.823-.451 28.14 28.14 0 00-1.025-.443 5.24 5.24 0 01-2.09-1.426 3.114 3.114 0 01-.687-2.037 3.236 3.236 0 01.375-1.605 3.172 3.172 0 011.021-1.105c.457-.3.965-.518 1.498-.64a7.716 7.716 0 011.798-.2c.555-.005 1.108.033 1.657.113.454.068.9.184 1.33.346v2.498a4.109 4.109 0 00-.655-.367 5.213 5.213 0 00-.73-.264 5.627 5.627 0 00-1.452-.203c-.28-.003-.56.026-.834.088-.223.047-.437.13-.633.245-.16.095-.297.225-.4.38a.9.9 0 00-.141.5.936.936 0 00.158.537c.123.176.275.329.45.452.224.159.461.298.71.416.277.138.591.278.942.422.444.183.874.396 1.288.638.36.21.69.466.981.764.27.28.483.61.626.97.15.408.224.84.215 1.274.02.584-.11 1.163-.378 1.681a3.07 3.07 0 01-1.03 1.1 4.455 4.455 0 01-1.514.599c-.6.126-1.21.189-1.822.187a10.255 10.255 0 01-1.873-.167 5.683 5.683 0 01-1.54-.502zM69.07 45.51H65.66v9.77h-2.703v-9.77H59.56v-2.198h9.509l.002 2.198z"
      fill="#fff"
    />
  </svg>
);

const HTTPLogoIcon = () => (
  <svg width="100px" height="100px" viewBox="0 0 100 100" fill="none">
    <path
      d="M71.448 77.657a35.002 35.002 0 01-49.107-6.207 34.999 34.999 0 016.56-49.378 35 35 0 0142.547 55.585"
      fill="#0078D4"
    />
    <path
      d="M50 18.325A31.675 31.675 0 1081.675 50 31.712 31.712 0 0050 18.325zm21.218 10.663A30.392 30.392 0 0162.5 32.31a36.938 36.938 0 00-5.284-11.3 29.873 29.873 0 0114.002 7.978zM50 20.121c1.5 0 2.998.113 4.482.337l-.03.028c2.6 2.757 4.759 7.047 6.305 12.192a61.648 61.648 0 01-22.455-.07c1.587-5.1 3.744-9.24 6.25-11.9l-.074-.07c1.82-.343 3.67-.516 5.522-.517zm-8.256 1.17a36.715 36.715 0 00-5.2 10.933 23.97 23.97 0 01-7.824-3.17 29.899 29.899 0 0113.024-7.763zm-13.5 49.154a22.618 22.618 0 017.347-3.123 28.863 28.863 0 005.56 11.218 29.92 29.92 0 01-12.909-8.095h.002zm26.411 9.07a29.903 29.903 0 01-10.6-.233l.162-.187c-3.052-2.633-5.387-6.8-6.879-12.189a61.067 61.067 0 0124.214.022c-1.512 5.514-3.894 9.862-6.962 12.508l.065.078zm3.007-.636a29.4 29.4 0 005.661-11.525 28.027 28.027 0 018.144 3.4A29.89 29.89 0 0157.66 78.88h.002zm6.1-13.275a52.92 52.92 0 00.831-4.608c-.619.166-1.252.322-1.9.468a50.97 50.97 0 01-.7 3.712 62.19 62.19 0 00-25.1-.008 50.154 50.154 0 01-.694-3.572c-.019-.119-.033-.24-.051-.359a44.888 44.888 0 01-1.887-.513c.052.385.1.77.163 1.15.2 1.288.447 2.523.725 3.716a24.289 24.289 0 00-8.106 3.51 29.8 29.8 0 01.457-38.72 25.387 25.387 0 008.549 3.558 59.498 59.498 0 00-.764 3.112c-.112.515-.2 1.042-.3 1.564.624-.172 1.268-.33 1.923-.48.048-.233.087-.47.137-.7.231-1.064.485-2.095.762-3.095a60.619 60.619 0 0011.992 1.154 60.14 60.14 0 0011.459-1.063c.3 1.135.561 2.315.8 3.514.647.133 1.28.28 1.9.441a63.704 63.704 0 00-.967-4.332 31.634 31.634 0 009.475-3.724 29.79 29.79 0 01.231 39.08 29.56 29.56 0 00-8.94-3.809l.005.004z"
      fill="#83B9F9"
    />
    <path
      d="M38.993 55.457h-2.768v-4.99h-5.074v4.99H28.39V43.205h2.761v4.888h5.074v-4.888h2.768v12.252zM50.4 45.45h-3.5v10.007h-2.761V45.45h-3.477v-2.245H50.4v2.245zM61.007 45.45h-3.5v10.007h-2.764V45.45h-3.477v-2.245h9.741v2.245zM65.416 51.238v4.22h-2.761V43.204h4.324c3.088 0 4.632 1.3 4.631 3.9a3.74 3.74 0 01-1.329 2.995 5.252 5.252 0 01-3.551 1.143l-1.314-.005zm0-5.913v3.816H66.5c1.467 0 2.2-.643 2.2-1.929 0-1.257-.733-1.886-2.2-1.887h-1.084z"
      fill="#fff"
    />
  </svg>
);

const AzureDbServiceIcon = () => (
  <svg width={100} height={100} viewBox="0 0 100 100" fill="none">
    <path
      d="M50 32.845c-15.733 0-28.488-4.445-28.488-10.311v54.933c0 5.644 12.533 10.222 28.088 10.311h.4c15.734 0 28.49-4.444 28.49-10.311V22.534c0 5.733-12.756 10.31-28.49 10.31z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M78.49 22.533c0 5.734-12.756 10.311-28.49 10.311-15.733 0-28.488-4.444-28.488-10.31 0-5.867 12.755-10.312 28.488-10.312 15.734 0 28.49 4.445 28.49 10.311z"
      fill="#E8E8E8"
    />
    <path
      d="M71.867 21.689c0 3.644-9.822 6.577-21.867 6.577-12.044 0-21.866-2.933-21.866-6.577 0-3.645 9.822-6.534 21.866-6.534 12.045 0 21.867 2.934 21.867 6.534z"
      fill="#50E6FF"
    />
    <path
      d="M50 23.333a51.333 51.333 0 00-17.289 2.533 50.76 50.76 0 0017.29 2.4c5.87.172 11.724-.7 17.288-2.577A52.623 52.623 0 0050 23.333z"
      fill="#198AB3"
    />
    <path
      d="M67.334 60.667V45.556h-4V63.91h10.933v-3.244h-6.933zM35.6 53.245a8.135 8.135 0 01-2.267-1.378 1.955 1.955 0 01-.533-1.422 1.512 1.512 0 01.667-1.334 3.023 3.023 0 011.867-.533 7.2 7.2 0 014.444 1.289v-3.822c-1.42-.529-2.93-.77-4.444-.711a7.288 7.288 0 00-4.845 1.51 4.8 4.8 0 00-1.867 3.956c0 2.267 1.423 4.045 4.445 5.378.981.416 1.907.954 2.755 1.6a1.869 1.869 0 01.667 1.422 1.69 1.69 0 01-.711 1.378 3.6 3.6 0 01-2 .489 7.378 7.378 0 01-4.845-1.867v4.134A9.644 9.644 0 0033.69 64.4a8.356 8.356 0 005.245-1.466 4.8 4.8 0 001.466-4.045 4.667 4.667 0 00-1.111-3.111 10.754 10.754 0 00-3.689-2.533zM58.89 60.31a10.4 10.4 0 001.467-5.6 10.31 10.31 0 00-1.467-4.71 8.044 8.044 0 00-3.111-3.334 8.89 8.89 0 00-4.444-1.156 9.378 9.378 0 00-4.8 1.2 8.267 8.267 0 00-3.245 3.29 10.933 10.933 0 00-1.156 5.066c.01 1.544.375 3.065 1.067 4.444a7.822 7.822 0 003.067 3.29 9.157 9.157 0 004.444 1.333l3.822 4.444h5.378l-5.466-4.889a7.955 7.955 0 004.444-3.378zm-4.444-1.11a4.177 4.177 0 01-3.378 1.555 4.088 4.088 0 01-3.378-1.6A6.756 6.756 0 0146.4 54.71a6.8 6.8 0 011.289-4.444 4.444 4.444 0 013.467-1.645 3.868 3.868 0 013.333 1.645 7.2 7.2 0 011.2 4.444 6.489 6.489 0 01-1.244 4.49z"
      fill="url(#paint1_radial)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1={21.5115}
        y1={55.1558}
        x2={78.4893}
        y2={55.1558}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#005BA1" />
        <stop offset={0.07} stopColor="#0060A9" />
        <stop offset={0.36} stopColor="#0071C8" />
        <stop offset={0.52} stopColor="#0078D4" />
        <stop offset={0.64} stopColor="#0074CD" />
        <stop offset={0.82} stopColor="#006ABB" />
        <stop offset={1} stopColor="#005BA1" />
      </linearGradient>
      <radialGradient
        id="paint1_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(51.6 56.978) scale(31.4222)"
      >
        <stop stopColor="#F2F2F2" />
        <stop offset={0.58} stopColor="#EEE" />
        <stop offset={1} stopColor="#E6E6E6" />
      </radialGradient>
    </defs>
  </svg>
);

const AzureFileServiceIcon = () => (
  <svg width={100} height={100} viewBox="0 0 100 100" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59.483 34.709h.172l-.172-.035v.035zm0 0H38c-1.103 0-1.828.925-1.828 1.817v26.811c0 1.097.931 2.023 1.828 2.023h25.517c1.104 0 1.828-.926 1.828-2.023V40.71h-5.862v-6zM42.586 57.886h16.345V54.8H42.586v3.086zm16.345-5.657H42.586v-3.086h16.345v3.086zM42.586 46.4h16.345v-3.086H42.586V46.4z"
      fill="#0078D7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.586 20.103h34.69l17.448 29.931-17.448 29.932h-34.69L16.138 50.034l17.448-29.931zm4.586 48.171H63.69c2.758 0 4.965-2.194 4.965-4.937V38.891L61.31 31.59H38.172c-2.758 0-4.965 2.194-4.965 4.937v26.811c0 2.743 2.207 4.937 4.965 4.937z"
      fill="#0078D7"
    />
  </svg>
);

const FileBinaryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path d="M96.151 132.477a4.2 4.2 0 002.567-1.128 3.326 3.326 0 00.935-2.46 3.457 3.457 0 00-.806-2.374 3.649 3.649 0 00-2.4-1.106q-.945-.107-5.436-.107h-3.647v7.283h4.168q3.717-.001 4.619-.108z" />
    <path d="M184 168a8.009 8.009 0 008-8v-48a8.009 8.009 0 00-8-8H48a8.009 8.009 0 00-8 8v48a8.009 8.009 0 008 8zm-58.512-47.941h6.188l12.891 21.033v-21.033h5.908v31.5h-6.381l-12.7-20.539v20.539h-5.908zm-12.7 0h6.359v31.5h-6.359zm-31.78 0h12.59a36.392 36.392 0 015.575.312 8.2 8.2 0 013.287 1.3 8.087 8.087 0 012.417 2.632 7.131 7.131 0 01.967 3.685 7.466 7.466 0 01-4.426 6.832 8.291 8.291 0 014.426 2.857 7.586 7.586 0 011.547 4.748 9.36 9.36 0 01-1 4.179 8.422 8.422 0 01-2.729 3.244 9.007 9.007 0 01-4.262 1.492q-1.589.172-7.67.215H81z" />
    <path d="M97.612 146.055a3.942 3.942 0 002.31-1.257 3.872 3.872 0 00.892-2.675 4.112 4.112 0 00-.687-2.406 3.886 3.886 0 00-1.987-1.439 21.6 21.6 0 00-5.64-.451h-5.136v8.422h5.887a28.768 28.768 0 004.361-.194z" />
    <path d="M200 8H64a16.018 16.018 0 00-16 16v72h8V24a8.009 8.009 0 018-8h136a8.009 8.009 0 018 8v167.029a8.1 8.1 0 01-.065.971H172a12.013 12.013 0 00-12 12v35.935a8.112 8.112 0 01-.971.065H64a8.009 8.009 0 01-8-8v-56h-8v56a16.018 16.018 0 0016 16h95.029a15.893 15.893 0 0011.313-4.686l40.972-40.971A15.9 15.9 0 00216 191.029V24a16.018 16.018 0 00-16-16z" />
  </svg>
);

const AppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg x="0px" y="0px" viewBox="0 0 490 490" xmlSpace="preserve" {...props}>
    <path d="M409.419 310.018H80.57c-44.422 0-80.57 36.148-80.57 80.58 0 44.423 36.148 80.57 80.57 80.57h328.849c44.433 0 80.58-36.147 80.58-80.57.001-44.432-36.147-80.58-80.58-80.58zm0 140.734H80.57c-33.168 0-60.153-26.987-60.153-60.154 0-33.177 26.986-60.162 60.153-60.162h328.849c33.177 0 60.164 26.985 60.164 60.162 0 33.166-26.987 60.154-60.164 60.154z" />
    <path d="M412.281 351.131c-21.762 0-39.467 17.705-39.467 39.467 0 21.764 17.705 39.468 39.467 39.468s39.467-17.704 39.467-39.468c0-21.762-17.705-39.467-39.467-39.467zm0 58.517c-10.507 0-19.051-8.543-19.051-19.051 0-10.507 8.543-19.051 19.051-19.051 10.507 0 19.051 8.544 19.051 19.051-.001 10.508-8.544 19.051-19.051 19.051zM300.757 351.131c-21.762 0-39.467 17.705-39.467 39.467 0 21.764 17.705 39.468 39.467 39.468 21.772 0 39.478-17.704 39.478-39.468-.001-21.762-17.706-39.467-39.478-39.467zm0 58.517c-10.507 0-19.051-8.543-19.051-19.051 0-10.507 8.543-19.051 19.051-19.051s19.061 8.544 19.061 19.051c0 10.508-8.554 19.051-19.061 19.051zM189.233 351.131c-21.762 0-39.467 17.705-39.467 39.467 0 21.764 17.705 39.468 39.467 39.468 21.772 0 39.478-17.704 39.478-39.468-.001-21.762-17.706-39.467-39.478-39.467zm0 58.517c-10.507 0-19.051-8.543-19.051-19.051 0-10.507 8.544-19.051 19.051-19.051 10.508 0 19.061 8.544 19.061 19.051 0 10.508-8.554 19.051-19.061 19.051zM77.719 351.131c-21.773 0-39.478 17.705-39.478 39.467 0 21.764 17.704 39.468 39.478 39.468 21.762 0 39.468-17.704 39.468-39.468 0-21.762-17.706-39.467-39.468-39.467zm0 58.517c-10.507 0-19.061-8.543-19.061-19.051 0-10.507 8.554-19.051 19.061-19.051s19.051 8.544 19.051 19.051c0 10.508-8.543 19.051-19.051 19.051z" />
    <path d="M202.401 124.158L202.401 196.938 222.818 196.938 222.818 124.158 232.628 136.117 248.419 123.177 212.61 79.532 176.801 123.177 192.592 136.117z" />
    <path d="M123.657 124.158L123.657 196.938 144.073 196.938 144.073 124.157 153.893 136.128 169.684 123.168 133.865 79.532 98.055 123.177 113.846 136.117z" />
    <path d="M105.951 209.479H240.523V229.89600000000002H105.951z" />
    <path d="M304.146 18.832H42.329v250.692h261.817V18.832zm-20.417 230.275H62.745V39.248h220.984v209.859zM375.844 269.275l104.545-90.8-104.545-90.807v55.757h-51.062v70.092h51.062v55.758zM345.198 193.1v-29.26h51.062v-31.393l52.985 46.027-52.985 46.018V193.1h-51.062z" />
  </svg>
);

const SimCardIcon1 = (props: SvgProps) => (
  <svg viewBox="0 0 80 80" {...props}>
    <path d="M20 8c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V26.656a5.003 5.003 0 00-1.465-3.535L48.88 9.465A5.003 5.003 0 0045.344 8zm0 2h25.344c.797 0 1.558.316 2.12.879l13.657 13.656c.563.567.879 1.324.879 2.121V68c0 1.117-.883 2-2 2H20c-1.117 0-2-.883-2-2V12c0-1.117.883-2 2-2zm7 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 6c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h18c2.75 0 5-2.25 5-5V41c0-2.75-2.25-5-5-5zm0 2h12c0 .55.45 1 1 1s1-.45 1-1h4c1.668 0 3 1.332 3 3v4c-.55 0-1 .45-1 1s.45 1 1 1v6c-.55 0-1 .45-1 1s.45 1 1 1c0 1.668-1.332 3-3 3h-4c0-.55-.45-1-1-1s-1 .45-1 1h-6c0-.55-.45-1-1-1s-1 .45-1 1h-4c-1.668 0-3-1.332-3-3 .55 0 1-.45 1-1s-.45-1-1-1v-6c.55 0 1-.45 1-1s-.45-1-1-1v-4c0-1.668 1.332-3 3-3zm13 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-12 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-12 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-12 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
  </svg>
);

const SimCardIcon2 = (props: SvgProps) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M19.15 21.6h3v-7.85h-3zm5.95 0h3v-7.85h-3zm5.95 0h3v-7.85h-3zM11 44q-1.2 0-2.1-.9Q8 42.2 8 41V15.95L19.95 4H37q1.2 0 2.1.9.9.9.9 2.1v34q0 1.2-.9 2.1-.9.9-2.1.9zm0-3h26V7H21.3L11 17.3V41zm0 0h26z" />
  </svg>
);

const DatasetLinkedIcon = (props: SvgProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M7 17h1.09c.28-1.67 1.24-3.1 2.6-4H7v4z" />
    <path d="M5 19V5h14v7h1c.34 0 .67.04 1 .09V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h3.81c-.35-.61-.6-1.28-.72-2H5z" />
    <path d="M7 7H11V11H7z" />
    <path d="M13 7H17V11H13z" />
    <path d="M16 20h-2c-1.1 0-2-.9-2-2s.9-2 2-2h2v-2h-2c-2.21 0-4 1.79-4 4s1.79 4 4 4h2v-2zM20 14h-2v2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z" />
    <path d="M20 19L20 17 17 17 14 17 14 19 19 19z" />
  </svg>
);

const DatasetIcon = (props: SvgProps) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0H24V24H0z" />
    <path d="M7 13H11V17H7z" />
    <path d="M13 13H17V17H13z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
    <path d="M7 7H11V11H7z" />
    <path d="M13 7H17V11H13z" />
  </svg>
);

const HiveIcon = (props: SvgProps) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path d="M19.7 44l-3.5-6.15H9.45l-4.35-7.7L8.55 24 5.1 17.85l4.35-7.7h6.75L19.7 4h8.6l3.5 6.15h6.75l4.35 7.7L39.45 24l3.45 6.15-4.35 7.7H31.8L28.3 44zm12.15-21.45h5l2.7-4.7-2.7-4.7h-5l-2.7 4.7zM21.5 28.6h5l2.7-4.6-2.7-4.6h-5L18.8 24zm0-12.2h5l2.7-4.7L26.5 7h-5l-2.7 4.7zm-10.3 6.15h5l2.7-4.7-2.7-4.7h-5l-2.7 4.7zm0 12.3h5l2.7-4.7-2.75-4.7h-5l-2.7 4.7zM21.5 41h5l2.7-4.7-2.7-4.7h-5l-2.7 4.7zm10.35-6.15h5l2.7-4.7-2.7-4.7h-5l-2.55 4.7z" />
  </svg>
);

const AddNewIcon = (props: SvgProps) => (
  <svg
    fill="none"
    height={24}
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    width={24}
    {...props}
  >
    <path
      d="M4.998 2H2v2.998h2.998V2z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={1.4992}
    />
    <path
      d="M4.999 3.5h14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={1.50335}
    />
    <path
      d="M3.5 4.998V19M20.498 5v14.002"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={1.35589}
    />
    <path
      d="M4.999 20.5h14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={1.50335}
    />
    <path
      d="M4.998 19H2v2.998h2.998V19zM21.997 2.001H19v2.998h2.998V2.001zM21.997 19.001H19v2.998h2.998v-2.998z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      strokeWidth={1.4992}
    />
    <path
      d="M9 12h3m3 0h-3m0 0V9m0 3v3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AddNewEntityIcon = (props: SvgProps) => (
  <svg
    fill="none"
    height={24}
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    width={24}
    {...props}
  >
    <path
      d="M9 12h3m3 0h-3m0 0V9m0 3v3M11.7 1.173a.6.6 0 01.6 0l8.926 5.154a.6.6 0 01.3.52v10.307a.6.6 0 01-.3.52L12.3 22.826a.6.6 0 01-.6 0l-8.926-5.154a.6.6 0 01-.3-.52V6.847a.6.6 0 01.3-.52L11.7 1.174z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DataMeshIcon = (props: SvgProps) => (
  <svg height={32} viewBox="0 0 32 32" width={32} {...props}>
    <path d="M29.976 15.783l-2-9a1 1 0 00-.421-.615l-6-4A1 1 0 0021 2H11a1 1 0 00-.555.168l-6 4a1 1 0 00-.421.615l-2 9a1.002 1.002 0 00.018.504l3 10a1 1 0 00.67.671l10 3h.006a.979.979 0 00.564 0h.005l10-3a1 1 0 00.671-.67l3-10a1.002 1.002 0 00.018-.505zm-19.05.833l-3.91-7.819 7.282 2.648zM16 12.497L19.589 18H12.41zM19.382 20L16 26.764 12.618 20zm-1.68-8.555l7.281-2.648-3.91 7.82zm.488-2.305l3.096-4.747 3.515 2.343zM16 8.836L12.846 4h6.308zm-2.19.304L7.2 6.736l3.514-2.343zm-4.844 8.03l-4.802-1.801 1.201-5.402zm5.104 10.207l-6.502-1.95 3.128-4.798zm7.233-6.748l3.129 4.797-6.502 1.951zm5.332-10.662l1.2 5.402-4.802 1.8zM4.537 17.645l4.595 1.722-2.793 4.283zm21.124 6.005l-2.793-4.283 4.595-1.722z" />
    <path
      data-name="&lt;Transparent Rectangle&gt;"
      fill="none"
      d="M0 0H32V32H0z"
    />
  </svg>
);

export const Flow = () => <Icon component={FlowIcon} />;
export const Circuit = () => <Icon component={CircuitIcon} />;
export const Device = () => <Icon component={DeviceIcon} />;
export const RobotArm = () => <Icon component={RobotArmIcon} />;
export const Indoors = () => <Icon component={IndoorsIcon} />;
export const Monitoring = () => <Icon component={MonitoringIcon} />;
export const Map = () => <Icon component={MapIcon} />;
export const Flowchart = () => <Icon component={FlowchartIcon} />;
export const Modelling = () => <Icon component={ModellingIcon} />;
export const Database = () => <Icon component={DatabaseIcon} />;
export const DataSources = () => <Icon component={DataSourcesIcon} />;
export const Teapot = () => <Icon component={TeapotIcon} />;
export const MqttLogo = () => <Icon component={MqttLogoIcon} />;
export const Graph = () => <Icon component={GraphIcon} />;
export const Support = () => <Icon component={SupportIcon} />;
export const Feedback = () => <Icon component={FeedbackIcon} />;
export const Streaming = () => <Icon component={StreamingIcon} />;
export const Reports = () => <Icon component={ReportsIcon} />;
export const MachineLearning1 = () => <Icon component={MachineLearning1Icon} />;
export const MachineLearning2 = () => <Icon component={MachineLearning2Icon} />;
export const Designer = () => <Icon component={DesignerIcon} />;
export const Analytics1 = () => <Icon component={Analytics1Icon} />;
export const Analytics2 = () => <Icon component={Analytics2Icon} />;
export const Integrations1 = () => <Icon component={Integrations1Icon} />;
export const Integrations2 = () => <Icon component={Integrations2Icon} />;
export const Security = () => <Icon component={SecurityIcon} />;
export const ApiReference = () => <Icon component={ApiReferenceIcon} />;
export const Trigger1 = () => <Icon component={Trigger1Icon} />;
export const Trigger2 = () => <Icon component={Trigger2Icon} />;
export const Trigger3 = () => <Icon component={Trigger3Icon} />;
export const Pipeline0 = () => <Icon component={Pipeline0Icon} />;
export const Pipeline1 = () => <Icon component={Pipeline1Icon} />;
export const Pipeline2 = () => <Icon component={Pipeline2Icon} />;
export const Pipeline3 = () => <Icon component={Pipeline3Icon} />;
export const DataOps = () => <Icon component={DataOpsIcon} />;
export const ValueType1 = () => <Icon component={ValueType1Icon} />;
export const Asset = () => <Icon component={AssetIcon} />;
export const AssetMonitoring = () => <Icon component={AssetMonitoringIcon} />;
export const CustomType = () => <Icon component={CustomTypeIcon} />;
export const Connection = (props: { height: number; width: number }) => (
  <Icon component={() => ConnectionIcon(props)} />
);

export const Dashboard = () => <Icon component={DashboardIcon} />;
//
export const RESTLogo = () => <Icon component={RESTLogoIcon} />;
export const HTTPLogo = () => <Icon component={HTTPLogoIcon} />;
export const AzureDbService = () => <Icon component={AzureDbServiceIcon} />;
export const AzureFileService = () => <Icon component={AzureFileServiceIcon} />;
export const FileBinary = (props: { height: number; width: number }) => (
  <Icon component={() => FileBinaryIcon(props)} />
);
export const App = (props: { height: number; width: number }) => (
  <Icon component={() => AppIcon(props)} />
);
//
export const SimCard1 = ({
  height = defaultHeight,
  width = defaultWidth,
}: SvgProps) => <Icon component={() => SimCardIcon1({ height, width })} />;
export const SimCard2 = ({
  height = defaultHeight,
  width = defaultWidth,
}: SvgProps) => <Icon component={() => SimCardIcon2({ height, width })} />;
export const DatasetLinked = ({
  height = defaultHeight,
  width = defaultWidth,
}: SvgProps) => <Icon component={() => DatasetLinkedIcon({ height, width })} />;
export const Dataset = ({
  height = defaultHeight,
  width = defaultWidth,
}: SvgProps) => <Icon component={() => DatasetIcon({ height, width })} />;
export const Hive = ({
  height = defaultHeight,
  width = defaultWidth,
}: SvgProps) => <Icon component={() => HiveIcon({ height, width })} />;
//
export const AddNew = ({
  height = defaultHeight,
  width = defaultWidth,
}: SvgProps) => <Icon component={() => AddNewIcon({ height, width })} />;
export const AddNewEntity = ({
  height = defaultHeight,
  width = defaultWidth,
}: SvgProps) => <Icon component={() => AddNewEntityIcon({ height, width })} />;
export const DataMesh = ({
  height = defaultHeight,
  width = defaultWidth,
}: SvgProps) => <Icon component={() => DataMeshIcon({ height, width })} />;
