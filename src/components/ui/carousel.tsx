import * as React from 'react'
import useEmblaCarousel, {
  type EmblaCarouselType as CarouselApi,
  type EmblaOptionsType as CarouselOptions,
  type EmblaPluginType as CarouselPlugin,
} from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { childrenWithNamespace, cn, getNameSpace } from '@/lib/utils'
import { Button } from '../../components/ui/button'

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin[]
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement> & CarouselProps>
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      namespace,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((cApi: CarouselApi) => {
      if (!cApi) {
        return
      }

      setCanScrollPrev(cApi.canScrollPrev())
      setCanScrollNext(cApi.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      return () => {
        api?.off('select', onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn(`${getNameSpace(namespace)}-carousel`, className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children && childrenWithNamespace(children, getNameSpace(namespace))}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement>>
>(({ className, namespace, children, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          `${getNameSpace(namespace)}-carousel-content`,
          {
            horizontal: orientation === 'horizontal',
            vertical: orientation === 'vertical',
          },
          className
        )}
        {...props}
      >
        {children && childrenWithNamespace(children, getNameSpace(namespace))}
      </div>
    </div>
  )
})
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<
  WithNameSpace<HTMLDivElement>,
  WithNameSpace<React.HTMLAttributes<HTMLDivElement>>
>(({ className, namespace, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        `${getNameSpace(namespace)}-carousel-item`,
        {
          horizontal: orientation === 'horizontal',
          vertical: orientation === 'vertical',
        },
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
  WithNameSpace<HTMLButtonElement>,
  WithNameSpace<React.ComponentProps<typeof Button>>
>(
  (
    { className, namespace, variant = 'outline', size = 'icon', ...props },
    ref
  ) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          `${getNameSpace(namespace)}-carousel-previous`,
          {
            horizontal: orientation === 'horizontal',
            vertical: orientation === 'vertical',
          },
          className
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    )
  }
)
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
  WithNameSpace<HTMLButtonElement>,
  WithNameSpace<React.ComponentProps<typeof Button>>
>(
  (
    { className, namespace, variant = 'outline', size = 'icon', ...props },
    ref
  ) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          `${getNameSpace(namespace)}-carousel-next`,
          {
            horizontal: orientation === 'horizontal',
            vertical: orientation === 'vertical',
          },
          className
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    )
  }
)
CarouselNext.displayName = 'CarouselNext'

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
