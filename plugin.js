import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const {
  spacing,
  fontWeight,
  fontSize,
  borderRadius,
  boxShadow,
  letterSpacing,
  flexShrink,
  flexGrow,
  flexBasis,
  transitionDuration,
  transitionProperty,
  transitionDelay,
  objectPosition,
  opacity,
  aspectRatio,
  flex,
  width,
  colors: themeColors,
  height,
  maxWidth,
  translate,
  gap,
  backgroundColor,
  borderColor,
  padding,
  zIndex,
  textUnderlineOffset,
} = defaultTheme

const ringBoxShadow = {
  2: 'box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);',
  ring: 'box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);',
}

function filterDefault(values) {
  return Object.fromEntries(
    Object.entries(values).filter(([key]) => key !== 'DEFAULT')
  )
}

function setOpacity(hex, alpha) {
  return `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, 0)}`
}

export default plugin.withOptions(
  function (options = {}) {
    return function ({
      addComponents,
      addUtilities,
      matchUtilities,
      theme,
      config,
    }) {
      const namespace = options.namespace ?? 'astrix'

      addUtilities({
        '@keyframes accordion-up': theme('keyframes.accordion-up'),
        '@keyframes accordion-down': theme('keyframes.accordion-down'),
        '@keyframes enter': theme('keyframes.enter'),
        '@keyframes exit': theme('keyframes.exit'),
        '.animate-in': {
          animationName: 'enter',
          animationDuration: theme('animationDuration.DEFAULT'),
          '--tw-enter-opacity': 'initial',
          '--tw-enter-scale': 'initial',
          '--tw-enter-rotate': 'initial',
          '--tw-enter-translate-x': 'initial',
          '--tw-enter-translate-y': 'initial',
        },
        '.animate-out': {
          animationName: 'exit',
          animationDuration: theme('animationDuration.DEFAULT'),
          '--tw-exit-opacity': 'initial',
          '--tw-exit-scale': 'initial',
          '--tw-exit-rotate': 'initial',
          '--tw-exit-translate-x': 'initial',
          '--tw-exit-translate-y': 'initial',
        },
      })

      matchUtilities(
        {
          'zoom-in': (value) => ({ '--tw-enter-scale': value }),
          'zoom-out': (value) => ({ '--tw-exit-scale': value }),
        },
        { values: theme('animationScale') }
      )

      matchUtilities(
        {
          'spin-in': (value) => ({ '--tw-enter-rotate': value }),
          'spin-out': (value) => ({ '--tw-exit-rotate': value }),
        },
        { values: theme('animationRotate') }
      )

      matchUtilities(
        {
          'slide-in-from-top': (value) => ({
            '--tw-enter-translate-y': `-${value}`,
          }),
          'slide-in-from-bottom': (value) => ({
            '--tw-enter-translate-y': value,
          }),
          'slide-in-from-left': (value) => ({
            '--tw-enter-translate-x': `-${value}`,
          }),
          'slide-in-from-right': (value) => ({
            '--tw-enter-translate-x': value,
          }),
          'slide-out-to-top': (value) => ({
            '--tw-exit-translate-y': `-${value}`,
          }),
          'slide-out-to-bottom': (value) => ({
            '--tw-exit-translate-y': value,
          }),
          'slide-out-to-left': (value) => ({
            '--tw-exit-translate-x': `-${value}`,
          }),
          'slide-out-to-right': (value) => ({
            '--tw-exit-translate-x': value,
          }),
        },
        { values: theme('animationTranslate') }
      )

      matchUtilities(
        {
          'fade-in': (value) => ({ '--tw-enter-opacity': value }),
          'fade-out': (value) => ({ '--tw-exit-opacity': value }),
        },
        { values: theme('animationOpacity') }
      )

      matchUtilities(
        { duration: (value) => ({ animationDuration: value }) },
        { values: filterDefault(theme('animationDuration')) }
      )

      matchUtilities(
        { delay: (value) => ({ animationDelay: value }) },
        { values: theme('animationDelay') }
      )

      matchUtilities(
        { ease: (value) => ({ animationTimingFunction: value }) },
        { values: filterDefault(theme('animationTimingFunction')) }
      )

      addUtilities({
        '.running': { animationPlayState: 'running' },
        '.paused': { animationPlayState: 'paused' },
      })

      matchUtilities(
        { 'fill-mode': (value) => ({ animationFillMode: value }) },
        { values: theme('animationFillMode') }
      )

      matchUtilities(
        { direction: (value) => ({ animationDirection: value }) },
        { values: theme('animationDirection') }
      )

      matchUtilities(
        { repeat: (value) => ({ animationIterationCount: value }) },
        { values: theme('animationRepeat') }
      )

      addComponents({
        [`.${namespace}-accordion`]: {
          display: 'flex',
          flex: flex['1'],
          alignItems: objectPosition.center,
          justifyContent: 'space-between',
          paddingTop: padding({ theme })['4'],
          paddingBottom: padding({ theme })['4'],
          fontWeight: theme('fontWeight.medium', fontWeight.medium),
          transitionProperty: transitionProperty.all,
          transitionDuration: transitionDuration['300'],
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: transitionDelay['0'],
          '&:hover': {
            textDecoration: 'underline',
          },
          '&[data-state=open]>svg': {
            transform: 'rotate(180deg)',
          },
        },
        [`.${namespace}-accordion-chevron-down`]: {
          height: height({ theme })['4'],
          width: width({ theme })['4'],
          flexShrink: theme('flexShrink.0', flexShrink['0']),
          transitionDuration: theme(
            'transitionDuration.200',
            transitionDuration['200']
          ),
        },
        [`.${namespace}-accordion-content`]: {
          overflow: 'hidden',
          fontSize: theme('fontSize.sm.0', fontSize.sm[0]),
          transitionProperty: transitionProperty.all,
          '&[data-state=closed]': {
            animation: 'accordion-up 0.2s ease-out',
          },
          '&[data-state=open]': {
            animation: 'accordion-down 0.2s ease-out',
          },
        },
        [`.${namespace}-accordion-children`]: {
          paddingBottom: padding({ theme })['4'],
          paddingTop: padding({ theme })['0'],
        },
        [`.${namespace}-accordion-item`]: {
          borderBottom: '1px solid',
        },
        [`.${namespace}-alert`]: {
          position: 'relative',
          width: width({ theme }).full,
          borderRadius: theme('borderRadius.md', borderRadius.md),
          border: '1px solid',
          padding: padding({ theme })['4'],
          '&>svg~*': {
            paddingLeft: padding({ theme })['7'],
          },
          '&>svg+div': {
            transform: 'translateY(-3px)',
          },
          '&>svg': {
            position: 'absolute',
            left: spacing['4'],
            top: spacing['4'],
          },
        },
        [`.${namespace}-alert-default`]: {
          backgroundColor: themeColors({ colors }).white,
          color: themeColors({ colors }).black,
        },
        [`.${namespace}-alert-destructive`]: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: themeColors({ colors }).red[800],
          color: themeColors({ colors }).red[800],
          '&>svg': {
            color: themeColors({ colors }).red[800],
          },
          '@media (prefers-color-scheme: dark)': {
            color: themeColors({ colors }).red[600],
            '&>svg': {
              color: themeColors({ colors }).red[600],
            },
            borderColor: themeColors({ colors }).red[600],
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
          backgroundColor: setOpacity(themeColors({ colors }).gray[900], 0.3),
          backdropFilter: 'blur(4px)',
        },
        [`.${namespace}-alert-dialog-content`]: {
          position: 'fixed',
          left: '50%',
          top: '50%',
          zIndex: zIndex['50'],
          display: 'grid',
          width: width({ theme }).full,
          maxWidth: maxWidth({
            theme,
            breakpoints: config('breakpoints', () => {}),
          }).lg,
          transform: `translate(-${translate({ theme })['1/2']},-${
            translate({ theme })['1/2']
          })`,
          gap: gap({ theme })['4'],
          border: '1px solid',
          backgroundColor: themeColors({ colors }).white,
          padding: padding({ theme })['6'],
          boxShadow: boxShadow.lg,
          transition: 'transform 0.2s, opacity 0.2s',
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
          gap: gap({ theme })['2'],
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
            gap: gap({ theme })['2'],
          },
        },
        [`.${namespace}-alert-dialog-title`]: {
          fontSize: fontSize.lg[0],
          fontWeight: fontWeight.semibold,
          color: themeColors({ colors }).gray[950],
        },
        [`.${namespace}-alert-dialog-description`]: {
          fontSize: fontSize.sm[0],
          color: themeColors({ colors }).neutral[900],
        },
        [`.${namespace}-avatar`]: {
          display: 'flex',
          position: 'relative',
          height: height({ theme })['10'],
          width: width({ theme })['10'],
          flexShrink: theme('flexShrink.0', flexShrink['0']),
          overflow: 'hidden',
          borderRadius: borderRadius.full,
        },
        [`.${namespace}-avatar-image`]: {
          aspectRatio: aspectRatio.square,
          height: height({ theme }).full,
          width: width({ theme }).full,
        },
        [`.${namespace}-avatar-fallback`]: {
          display: 'flex',
          height: height({ theme }).full,
          width: width({ theme }).full,
          alignItems: objectPosition.center,
          justifyContent: objectPosition.center,
          borderRadius: borderRadius.full,
          backgroundColor: themeColors({ colors }).gray[50],
        },
        [`.${namespace}-badge`]: {
          display: 'inline-flex',
          alignItems: objectPosition.center,
          borderRadius: borderRadius.full,
          paddingLeft: padding({ theme })['2.5'],
          paddingRight: padding({ theme })['2.5'],
          paddingTop: padding({ theme })['0.5'],
          paddingBottom: padding({ theme })['0.5'],
          fontSize: fontSize.xs[0],
          fontWeight: fontWeight.semibold,
          transitionProperty: transitionProperty.colors,
          ...fontSize.xs[1],
          '&:focus-visible': {
            boxShadow: ringBoxShadow[2],
          },
        },
        [`.${namespace}-badge-default`]: {
          borderColor: borderColor({ theme }).sky[700],
          backgroundColor: backgroundColor({ theme }).sky[600],
          color: themeColors({ colors }).white,
          '&:hover': {
            backgroundColor: backgroundColor({ theme }).sky[800],
          },
        },
        [`.${namespace}-badge-outline`]: {
          borderColor: borderColor({ theme }).sky[700],
          borderStyle: 'solid',
          borderWidth: '1px',
          backgroundColor: backgroundColor({ theme }).transparent,
          color: themeColors({ colors }).black,
          boxShadow: ringBoxShadow[2],
          '&:hover': {
            backgroundColor: backgroundColor({ theme }).sky[800],
            color: themeColors({ colors }).white,
          },
        },
        [`.${namespace}-badge-destructive`]: {
          borderColor: borderColor({ theme }).red[600],
          borderStyle: 'solid',
          borderWidth: '1px',
          backgroundColor: backgroundColor({ theme }).red[700],
          color: themeColors({ colors }).white,
          boxShadow: ringBoxShadow[2],
          '&:hover': {
            backgroundColor: backgroundColor({ theme }).red[800],
          },
        },
        [`.${namespace}-badge-destructive-outline`]: {
          borderColor: borderColor({ theme }).red[600],
          borderStyle: 'solid',
          borderWidth: '1px',
          backgroundColor: backgroundColor({ theme }).transparent,
          color: themeColors({ colors }).black,
          boxShadow: ringBoxShadow[2],
          '&:hover': {
            color: themeColors({ colors }).white,
            backgroundColor: backgroundColor({ theme }).red[800],
          },
        },
        [`.${namespace}-badge-success`]: {
          borderColor: borderColor({ theme }).green[500],
          borderStyle: 'solid',
          borderWidth: '1px',
          backgroundColor: backgroundColor({ theme }).green[600],
          color: themeColors({ colors }).white,
          boxShadow: ringBoxShadow[2],
          '&:hover': {
            backgroundColor: backgroundColor({ theme }).green[700],
          },
        },
        [`.${namespace}-badge-success-outline`]: {
          borderColor: borderColor({ theme }).green[500],
          borderStyle: 'solid',
          borderWidth: '1px',
          backgroundColor: backgroundColor({ theme }).transparent,
          color: themeColors({ colors }).black,
          boxShadow: ringBoxShadow[2],
          '&:hover': {
            color: themeColors({ colors }).white,
            backgroundColor: backgroundColor({ theme }).green[700],
          },
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
            boxShadow: ringBoxShadow[2],
          },
          '&:disabled': {
            pointerEvents: 'none',
            opacity: theme('opacity.50', opacity['50']),
          },
        },
        [`.${namespace}-button-default`]: {
          backgroundColor: theme(
            'overrides.button.default.background',
            themeColors({ colors }).sky[600]
          ),
          color: theme(
            'overrides.button.default.text',
            themeColors({ colors }).white
          ),
          '&:hover': {
            backgroundColor: theme(
              'overrides.button.default.hover.background',
              themeColors({ colors }).sky[800]
            ),
          },
        },
        [`.${namespace}-button-outline`]: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme(
            'overrides.button.outline.border',
            themeColors({ colors }).sky[600]
          ),
          backgroundColor: theme(
            'overrides.button.outline.background',
            themeColors({ colors }).white
          ),
          color: theme(
            'overrides.button.outline.text',
            themeColors({ colors }).neutral[900]
          ),
          '&:hover': {
            backgroundColor: theme(
              'overrides.button.outline.hover.background',
              themeColors({ colors }).sky[600]
            ),
            color: theme(
              'overrides.button.secondary.hover.text',
              themeColors({ colors }).white
            ),
          },
        },
        [`.${namespace}-button-destructive`]: {
          backgroundColor: theme(
            'overrides.button.destructive.background',
            themeColors({ colors }).red[600]
          ),
          color: theme(
            'overrides.button.destructive.text',
            themeColors({ colors }).white
          ),
          '&:hover': {
            backgroundColor: theme(
              'overrides.button.destructive.hover.background',
              themeColors({ colors }).red[800]
            ),
          },
        },
        [`.${namespace}-button-destructive-outline`]: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme(
            'overrides.button.outline.border',
            themeColors({ colors }).red[600]
          ),
          backgroundColor: theme(
            'overrides.button.outline.background',
            themeColors({ colors }).white
          ),
          color: theme(
            'overrides.button.outline.text',
            themeColors({ colors }).neutral[900]
          ),
          '&:hover': {
            backgroundColor: theme(
              'overrides.button.outline.hover.background',
              themeColors({ colors }).red[600]
            ),
            color: theme(
              'overrides.button.secondary.hover.text',
              themeColors({ colors }).white
            ),
          },
        },
        [`.${namespace}-button-success`]: {
          backgroundColor: theme(
            'overrides.button.success.background',
            themeColors({ colors }).green[600]
          ),
          color: theme(
            'overrides.button.success.text',
            themeColors({ colors }).white
          ),
          '&:hover': {
            backgroundColor: theme(
              'overrides.button.success.hover.background',
              themeColors({ colors }).green[700]
            ),
          },
        },
        [`.${namespace}-button-success-outline`]: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: theme(
            'overrides.button.outline.border',
            themeColors({ colors }).green[600]
          ),
          backgroundColor: theme(
            'overrides.button.outline.background',
            themeColors({ colors }).white
          ),
          color: theme(
            'overrides.button.outline.text',
            themeColors({ colors }).neutral[900]
          ),
          '&:hover': {
            backgroundColor: theme(
              'overrides.button.outline.hover.background',
              themeColors({ colors }).green[600]
            ),
            color: theme(
              'overrides.button.secondary.hover.text',
              themeColors({ colors }).white
            ),
          },
        },
        [`.${namespace}-button-ghost`]: {
          backgroundColor: theme(
            'overrides.button.ghost.background',
            themeColors({ colors }).transparent
          ),
          color: theme(
            'overrides.button.ghost.text',
            themeColors({ colors }).neutral[900]
          ),
          '&:hover': {
            backgroundColor: theme(
              'overrides.button.ghost.hover.background',
              themeColors({ colors }).gray[600]
            ),
            color: theme(
              'overrides.button.ghost.hover.text',
              themeColors({ colors }).white
            ),
          },
        },
        [`.${namespace}-button-link`]: {
          color: theme(
            'overrides.button.link.text',
            themeColors({ colors }).neutral[900]
          ),
          '&:hover': {
            textDecoration: 'underline',
            textUnderlineOffset: textUnderlineOffset['4'],
            textDecorationColor: theme(
              'overrides.button.link.hover.underline',
              themeColors({ colors }).gray[600]
            ),
          },
        },
        [`.${namespace}-button-size-default`]: {
          height: height({ theme })['10'],
          paddingLeft: padding({ theme })['4'],
          paddingRight: padding({ theme })['4'],
          paddingTop: padding({ theme })['2'],
          paddingBottom: padding({ theme })['2'],
        },
        [`.${namespace}-button-size-sm`]: {
          height: height({ theme })['9'],
          borderRadius: borderRadius.md,
          paddingLeft: padding({ theme })['3'],
          paddingRight: padding({ theme })['3'],
        },
        [`.${namespace}-button-size-lg`]: {
          height: height({ theme })['11'],
          borderRadius: borderRadius.md,
          paddingLeft: padding({ theme })['8'],
          paddingRight: padding({ theme })['8'],
        },
        [`.${namespace}-button-size-icon`]: {
          height: height({ theme })['10'],
          width: width({ theme })['10'],
        },
        [`.${namespace}-calendar`]: {
          padding: padding({ theme })['3'],
        },
        [`.${namespace}-calendar-day`]: {
          backgroundColor: themeColors({ colors }).transparent,
          height: height({ theme })['9'],
          width: width({ theme })['9'],
          padding: padding({ theme })['0'],
          fontWeight: fontWeight.normal,
          '&:hover': {
            backgroundColor: themeColors({ colors }).sky[600],
            color: themeColors({ colors }).white,
          },
          '&[aria-selected="true"]': {
            opacity: opacity['100'],
          },
        },
        [`.${namespace}-calendar-today`]: {
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: borderRadius.full,
          borderColor: themeColors({ colors }).sky[600],
        },
        [`.${namespace}-calendar-month`]: {
          '&>* + *': {
            marginTop: spacing[4],
          },
        },
        [`.${namespace}-calendar-table`]: {
          width: width({ theme }).full,
          borderCollapse: 'collapse',
          '&>* + *': {
            marginTop: spacing[2],
          },
        },
        [`.${namespace}-calendar-months`]: {
          display: 'flex',
          flexDirection: 'column',
          '&>* + *': {
            marginTop: spacing[4],
          },
          '@media (max-width: 640px)': {
            flexDirection: 'row',
            '&>* + *': {
              marginLeft: spacing[4],
              marginTop: spacing[0],
            },
          },
        },
        [`.${namespace}-calendar-disabled`]: {
          color: setOpacity(themeColors({ colors }).neutral[700], 0.3),
        },
        [`.${namespace}-calendar-selected`]: {
          backgroundColor: themeColors({ colors }).sky[600],
          color: themeColors({ colors }).white,
          [`&:not(.rdp-day_range_start, .rdp-day_range_end, .${namespace}-calendar-range-middle)`]:
            {
              borderRadius: borderRadius.md,
            },
          '&.rdp-day_range_start': {
            borderTopLeftRadius: borderRadius.md,
            borderBottomLeftRadius: borderRadius.md,
          },
          '&.rdp-day_range_end': {
            borderTopRightRadius: borderRadius.md,
            borderBottomRightRadius: borderRadius.md,
          },
        },
        [`.${namespace}-calendar-nav`]: {
          display: 'flex',
          alignItems: objectPosition.center,
          '&>* + *': {
            marginLeft: spacing[1],
          },
        },
        [`.${namespace}-calendar-nav-button-previous`]: {
          position: 'absolute',
          left: spacing[1],
        },
        [`.${namespace}-calendar-nav-button-next`]: {
          position: 'absolute',
          right: spacing[1],
        },
        [`.${namespace}-calendar-nav-button`]: {
          display: 'flex',
          height: height({ theme })['7'],
          width: width({ theme })['7'],
          padding: padding({ theme })['0'],
          backgroundColor: themeColors({ colors }).transparent,
          alignItems: objectPosition.center,
          justifyContent: objectPosition.center,
          opacity: opacity['50'],
          '&:hover': {
            borderColor: themeColors({ colors }).sky[600],
            borderRadius: borderRadius.md,
            borderWidth: '1px',
            borderStyle: 'solid',
            opacity: opacity['100'],
          },
        },
        [`.${namespace}-calendar-cell`]: {
          textAlign: objectPosition.center,
          fontSize: fontSize.sm[0],
          ...fontSize.sm[1],
          padding: padding({ theme })['0'],
          position: 'relative',
          '&:focus-within': {
            position: 'relative',
            zIndex: '20',
          },
        },
        [`.${namespace}-calendar-head-row`]: {
          display: 'flex',
        },
        [`.${namespace}-calendar-row`]: {
          display: 'flex',
          width: width({ theme }).full,
          '&>*': {
            marginTop: spacing[2],
          },
        },
        [`.${namespace}-calendar-head-cell`]: {
          width: width({ theme })['9'],
          fontWeight: fontWeight.normal,
          fontSize: fontSize.sm[0],
          color: setOpacity(themeColors({ colors }).neutral[700], 0.7),
          borderRadius: borderRadius.md,
        },
        [`.${namespace}-calendar-caption-label`]: {
          fontWeight: fontWeight.medium,
          fontSize: fontSize.sm[0],
          ...fontSize.sm[1],
        },
        [`.${namespace}-calendar-caption`]: {
          display: 'flex',
          alignItems: objectPosition.center,
          justifyContent: objectPosition.center,
          paddingTop: padding({ theme })['1'],
          position: 'relative',
        },
        [`.${namespace}-calendar-range-middle`]: {
          borderRadius: borderRadius.none,
          '[aria-selected="true"]': {
            backgroundColor: themeColors({ colors }).sky[600],
            color: themeColors({ colors }).white,
          },
        },
        [`.${namespace}-card`]: {
          borderRadius: borderRadius.md,
          borderWidth: '1px',
          borderStyle: 'solid',
          backgroundColor: themeColors({ colors }).white,
          color: themeColors({ colors }).neutral[900],
          boxShadow: boxShadow.sm,
        },
        [`.${namespace}-card-header`]: {
          display: 'flex',
          flexDirection: 'column',
          '&>* + *': {
            marginTop: spacing['1.5'],
          },
          padding: padding({ theme })['6'],
        },
        [`.${namespace}-card-title`]: {
          fontSize: fontSize['2xl'][0],
          fontWeight: fontWeight.semibold,
          lineHeight: 1,
          letterSpacing: letterSpacing.tight,
        },
        [`.${namespace}-card-description`]: {
          fontSize: fontSize.sm[0],
          ...fontSize.sm[1],
          color: themeColors({ colors }).neutral[700],
        },
        [`.${namespace}-card-content`]: {
          padding: padding({ theme })['6'],
          paddingTop: padding({ theme })['0'],
        },
        [`.${namespace}-card-footer`]: {
          display: 'flex',
          alignItems: objectPosition.center,
          padding: padding({ theme })['6'],
          paddingTop: padding({ theme })['0'],
        },
        [`.${namespace}-carousel`]: {
          position: 'relative',
        },
        [`.${namespace}-carousel-content`]: {
          display: 'flex',
          '&.horizontal': {
            marginLeft: `-${spacing[4]}`,
          },
          '&.vertical': {
            marginTop: `-${spacing[4]}`,
            flexDirection: 'column',
          },
        },
        [`.${namespace}-carousel-item`]: {
          minWidth: width({ theme })['0'],
          flexShrink: flexShrink['0'],
          flexGrow: flexGrow['0'],
          flexBasis: flexBasis({ theme }).full,
          '&.horizontal': {
            paddingLeft: spacing[4],
          },
          '&.vertical': {
            paddingTop: spacing[4],
          },
        },
        [`.${namespace}-carousel-previous`]: {
          position: 'absolute',
          height: height({ theme })['8'],
          width: width({ theme })['8'],
          borderRadius: borderRadius.full,
          '&.horizontal': {
            left: `-${spacing[12]}`,
            top: '50%',
            transform: 'translateY(-50%)',
          },
          '&.vertical': {
            top: `-${spacing[12]}`,
            left: '50%',
            transform: 'translateX(-50%) rotate(90deg)',
          },
        },
        [`.${namespace}-carousel-next`]: {
          position: 'absolute',
          height: height({ theme })['8'],
          width: width({ theme })['8'],
          borderRadius: borderRadius.full,
          '&.horizontal': {
            right: `-${spacing[12]}`,
            top: '50%',
            transform: 'translateY(-50%)',
          },
          '&.vertical': {
            bottom: `-${spacing[12]}`,
            left: '50%',
            transform: 'translateX(-50%) rotate(90deg)',
          },
        },
      })
    }
  },
  function (options = {}) {
    const namespace = options.namespace ?? 'astrix'

    const classRegexp = new RegExp(`^${namespace}-`)

    return {
      safelist: [
        {
          pattern: classRegexp,
        },
      ],
      theme: {
        extend: {
          animationDelay: ({ theme }) => ({
            ...theme('transitionDelay'),
          }),
          animationDuration: ({ theme }) => ({
            0: '0ms',
            ...theme('transitionDuration'),
          }),
          animationTimingFunction: ({ theme }) => ({
            ...theme('transitionTimingFunction'),
          }),
          animationFillMode: {
            none: 'none',
            forwards: 'forwards',
            backwards: 'backwards',
            both: 'both',
          },
          animationDirection: {
            normal: 'normal',
            reverse: 'reverse',
            alternate: 'alternate',
            'alternate-reverse': 'alternate-reverse',
          },
          animationOpacity: ({ theme }) => ({
            DEFAULT: 0,
            ...theme('opacity'),
          }),
          animationTranslate: ({ theme }) => ({
            DEFAULT: '100%',
            ...theme('translate'),
          }),
          animationScale: ({ theme }) => ({
            DEFAULT: 0,
            ...theme('scale'),
          }),
          animationRotate: ({ theme }) => ({
            DEFAULT: '30deg',
            ...theme('rotate'),
          }),
          animationRepeat: {
            0: '0',
            1: '1',
            infinite: 'infinite',
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: {
                height: 'var(--radix-accordion-content-height)',
              },
            },
            'accordion-up': {
              from: {
                height: 'var(--radix-accordion-content-height)',
              },
              to: { height: '0' },
            },
            enter: {
              from: {
                opacity: 'var(--tw-enter-opacity, 1)',
                transform:
                  'translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))',
              },
            },
            exit: {
              to: {
                opacity: 'var(--tw-exit-opacity, 1)',
                transform:
                  'translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))',
              },
            },
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
          },
          data: {
            open: 'state~="open"',
            closed: 'state~="closed"',
          },
          colors: themeColors({ colors }),
        },
      },
    }
  }
)
