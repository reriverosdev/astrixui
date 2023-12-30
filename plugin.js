import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindAnimate from "tailwindcss-animate";

const { 
  spacing, 
  fontWeight, 
  fontSize, 
  borderRadius, 
  boxShadow, 
  letterSpacing, 
  flexShrink, 
  transitionDuration,
  transitionProperty,
  transitionDelay,
  objectPosition,
  ringOffsetWidth,
  opacity,
  flex,
  width,
  height,
  maxWidth,
  translate,
  gap,
  padding,
  zIndex,
  textUnderlineOffset,
} = defaultTheme;

export default plugin.withOptions(function (options = {}) {
  return function({ addComponents, theme, config }) {
    const namespace = options.namespace ?? 'astrix';

    addComponents({
      [`.${namespace}-accordion`]: {
        display: 'flex',
        flex: flex["1"],
        alignItems: objectPosition.center,
        justifyContent: 'space-between',
        paddingTop: padding({ theme })["4"],
        paddingBottom: padding({ theme })["4"],
        fontWeight:  theme("fontWeight.medium", fontWeight.medium),
        transitionProperty: transitionProperty.all,
        transitionDuration: transitionDuration["300"],
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: transitionDelay["0"],
        '&:hover': {
          textDecoration: 'underline',
        },
        '&[data-state=open]>svg': {
          transform: 'rotate(180deg)',
        },
      },
      [`.${namespace}-accordion-chevron-down`]: {
        height: height({ theme })["4"],
        width:  width({ theme })["4"],
        flexShrink: theme("flexShrink.0", flexShrink["0"]),
        transitionDuration: theme("transitionDuration.200", transitionDuration["200"]),
      },
      [`.${namespace}-accordion-content`]: {
        overflow: 'hidden',
        fontSize: theme("fontSize.sm.0", fontSize.sm[0]),
        transitionProperty: transitionProperty.all,
        '&[data-state=closed]': {
          animation: 'animate-accordion-up',
        },
        '&[data-state=open]': {
          animation: 'animate-accordion-down',
        },
      },
      [`.${namespace}-accordion-children`]: {
        paddingBottom: padding({ theme })["4"],
        paddingTop: padding({ theme })["0"],
      },
      [`.${namespace}-accordion-item`]: {
        borderBottom: "1px solid",
      },
      [`.${namespace}-alert`]: {
        position: 'relative',
        width: width({ theme }).full,
        borderRadius: theme("borderRadius.md", borderRadius.md),
        border: '1px solid',
        padding: padding({ theme })["4"],
        '&>svg~*': {
          paddingLeft: padding({ theme })["7"],
        },
        '&>svg+div': {
          transform: 'translateY(-3px)',
        },
        '&>svg': {
          position: 'absolute',
          left: spacing['4'],
          top: spacing['4'],
          color: 'var(--foreground)',
        },
      },
      [`.${namespace}-alert-default`]: {
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      },
      [`.${namespace}-alert-destructive`]: {
        border: '1px solid var(--destructive-border, transparent)',
        background: 'var(--destructive-background)',
        color: 'var(--destructive-foreground)',
        '&>svg': {
          color: 'var(--destructive-foreground)',
        },
        '@media (prefers-color-scheme: dark)': {
          border: '1px solid var(--dark-destructive-border, transparent)',
        },
      },
      [`.${namespace}-alert-title`]: {
        marginBottom: theme('spacing.1', spacing['1']),
        fontWeight: theme('fontWeight.medium', fontWeight.medium),
        lineHeight: fontSize.base[1].lineHeight,
        letterSpacing: letterSpacing.tight,
      },
      [`.${namespace}-alert-description`]: {
        fontSize: fontSize.sm[0],
        '&_p': {
          lineHeight: fontSize.sm[1].lineHeight,
        },
      },
      [`.${namespace}-alert-dialog-overlay`]: {
        position: 'fixed',
        top: theme('spacing.0', spacing['0']),
        right: theme('spacing.0', spacing['0']),
        bottom: theme('spacing.0', spacing['0']),
        left: theme('spacing.0', spacing['0']),
        zIndex: theme('zIndex.50', zIndex['50']),
        backgroundColor: 'rgba(0, 0, 0, 0.8)', /* replace with your variable or color value */
        backdropFilter: 'blur(4px)',
        '&[data-state=open]': {
          animation: 'animate-in, fade-in-0',
        },
        '&[data-state=closed]': {
          animation: 'animate-out, fade-out-0',
        },
      },
      [`.${namespace}-alert-dialog-content`]: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        zIndex: zIndex["50"],
        display: 'grid',
        width: width({ theme }).full,
        maxWidth: maxWidth({ theme, breakpoints: config('breakpoints', () => {})}).lg,
        transform: `translate(-${translate({ theme })['1/2']},-${translate({ theme })['1/2']})`,
        gap: gap({ theme })["4"],
        border: '1px solid',
        backgroundColor: 'var(--background)',
        padding: padding({ theme })["6"],
        boxShadow: boxShadow.lg,
        transition: 'transform 0.2s, opacity 0.2s',
        '&[data-state=open]': {
          animation: 'animate-in, fade-in-0, zoom-in-95, slide-in-from-left-1/2, slide-in-from-top-[48%]',
        },
        '&[data-state=closed]': {
          animation: 'animate-out, fade-out-0, zoom-out-95, slide-out-to-left-1/2, slide-out-to-top-[48%]',
        },
        '@media (min-width: 640px)': {
          borderRadius: borderRadius.md,
          width: width({ theme }).full,
        },
        '@media (min-width: 768px)': {
          width: width({ theme }).full,
        },
      },
      [`.${namespace}-alert-dialog-header`]: {
        display: 'flex',
        flexDirection: 'column',
        gap: gap({ theme })["2"],
        textAlign: objectPosition.center,
        '@media (min-width: 640px)': {
          textAlign: objectPosition.left,
        },
      },
      [`.${namespace}-alert-dialog-footer`]: {
        display: 'flex',
        flexDirection: 'column-reverse',
        '@media (min-width: 640px)': {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          gap: gap({ theme })["2"],
        },
      },
      [`.${namespace}-alert-dialog-title`]: {
        fontSize: fontSize.lg[0],
        fontWeight: fontWeight.semibold,
      },
      [`.${namespace}-alert-dialog-description`]: {
        fontSize: fontSize.sm[0],
        color: 'var(--muted-foreground)',
      },
      [`.${namespace}-button`]: {
        display: 'inline-flex',
        alignItems: objectPosition.center,
        justifyContent: objectPosition.center,
        borderRadius: borderRadius.md,
        fontSize: fontSize.sm[0],
        fontWeight: fontWeight.medium,
        outline: 'none',
        transition: 'color 0.2s, background-color 0.2s',
        '&:focus-visible': {
          outline: 'none',
          ring: '2px solid',
          ringColor: 'var(--ring)',
          ringOffset: ringOffsetWidth["2"],
        },
        '&:disabled': {
          pointerEvents: 'none',
          opacity: theme('opacity.50', opacity["50"]),
        },      
      },
      [`.${namespace}-button-default`]: {
        backgroundColor: 'var(--primary)',
        color: 'var(--primary-foreground)',
        '&:hover': {
          backgroundColor: 'var(--primary90)/90',
        },
      },
      [`.${namespace}-button-destructive`]: {
        backgroundColor: 'var(--destructive)',
        color: 'var(--destructive-foreground)',
        '&:hover': {
          backgroundColor: 'var(--destructive)/90',
        },
      },
      [`.${namespace}-button-outline`]: {
        border: '1px solid var(--input)',
        backgroundColor: 'var(--background)',
        '&:hover': {
          backgroundColor: 'var(--accent)',
          color: 'var(--accent-foreground)',
        },      
      },
      [`.${namespace}-button-secondary`]: {
        backgroundColor: 'var(--secondary)',
        color: 'var(--secondary-foreground)',
        '&:hover': {
          backgroundColor: 'var(--secondary)/80',
        },
      },
      [`.${namespace}-button-ghost`]: {
        backgroundColor: 'transparent',
        color: 'var(--text)',
        '&:hover': {
          backgroundColor: 'var(--accent)',
          color: 'var(--accent-foreground)',
        },
      },
      [`.${namespace}-button-link`]: {
        color: 'var(--primary)',
        '&:hover': {
          textDecoration: 'underline',
          textUnderlineOffset: textUnderlineOffset["4"],
        },
      },
      [`.${namespace}-button-size-default`]: {
        height: height({ theme})["10"],
        paddingLeft: padding({ theme })["4"],
        paddingRight: padding({ theme })["4"],
        paddingTop: padding({ theme })["2"],
        paddingBottom: padding({ theme })["2"],
      },
      [`.${namespace}-button-size-sm`]: {
        height: height({ theme})["9"],
        borderRadius: borderRadius.md,
        paddingLeft: padding({ theme })["3"],
        paddingRight: padding({ theme })["3"],
      },
      [`.${namespace}-button-size-lg`]: {
        height: height({ theme})["11"],
        borderRadius: borderRadius.md,
        paddingLeft: padding({ theme })["8"],
        paddingRight: padding({ theme })["8"],
      },
      [`.${namespace}-button-size-icon`]: {
        height: height({ theme})["10"],
        width: width({ theme})["10"],
      },
    })
  }
}, function(options = {}) {

  const namespace = options.namespace ?? 'astrix';

  const classRegexp = new RegExp(`^${namespace}-`);

  return {
    safelist: [
      {
        pattern: classRegexp
      }
    ],
    theme: {
      extend: {
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      }
    },
    plugins: [tailwindAnimate]
  }
});