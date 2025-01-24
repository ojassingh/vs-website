"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Plus, X } from "lucide-react"
import { type ReactNode, useState } from "react"

export const CARDS: Card[] = [
  {
    id: 1,
    title: "Some title here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque optio recusandae dolorem ipsa odit perferendis, repellat rem corporis sit soluta beatae neque illum molestias ex quidem delectus adipisci. Laboriosam!",
  },
  {
    id: 2,
    title: "Some title here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque optio recusandae dolorem ipsa odit perferendis, repellat rem corporis sit soluta beatae neque illum molestias ex quidem delectus adipisci. Laboriosam!",
  },
  {
    id: 3,
    title: "Some title here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloremque optio recusandae dolorem ipsa odit perferendis, repellat rem corporis sit soluta beatae neque illum molestias ex quidem delectus adipisci. Laboriosam!",
  },
]

type Card = {
  id: number
  title: string
  description: string
}

const LightLinearCards = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)
  const [isHorizontal, setIsHorizontal] = useState(true)

  return (
    <>
      <main className="relative h-full w-full flex items-center justify-center">
        <motion.ul
          className={`flex size-full flex-wrap items-center justify-center gap-4 ${
            isHorizontal ? "flex-row" : "flex-col"
          }`}
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {CARDS.map((card) => (
            <Card key={card.id} card={card} onClick={() => setSelectedCard(card)} />
          ))}
        </motion.ul>
      </main>
      <Modal card={selectedCard} onClick={() => setSelectedCard(null)} />
    </>
  )
}

function Card(props: { card: Card; onClick: () => void }) {
  return (
    <motion.li
      key={props.card.title}
      className="flex h-60 w-64 cursor-pointer flex-col justify-end rounded-[30px] bg-gray-100 px-7 py-8 text-[21px] text-balance text-gray-800 hover:bg-gray-200 transition-colors"
      layoutId={`card-${props.card.id}`}
      onClick={props.onClick}
    >
      <div className="flex items-center justify-between">
        <motion.p className="text-balance font-medium" layoutId={`heading-${props.card.id}`}>
          {props.card.title}
        </motion.p>
        <Button aria-label="Open card">
          <Plus className="size-4" />
        </Button>
      </div>
      <motion.span layoutId={`description-${props.card.id}`} />
    </motion.li>
  )
}

function Modal(props: { card: Card | null; onClick: () => void }) {
  return (
    <AnimatePresence>
      {props.card && (
        <>
          <motion.div
            className="fixed inset-0 z-[1000000] bg-white/50 backdrop-blur-md"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <motion.div
            className="fixed inset-0 z-[1000001] flex items-center justify-center p-4"
            onClick={props.onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-[500px] overflow-hidden rounded-[30px] bg-white p-8 shadow-lg"
              layoutId={`card-${props.card.id}`}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="mx-auto max-w-xl">
                <motion.h2 className="text-2xl font-medium text-gray-800" layoutId={`heading-${props.card.id}`}>
                  {props.card.title}
                </motion.h2>
                <motion.p className="mt-4 text-[15px] text-gray-600" layoutId={`description-${props.card.id}`}>
                  {props.card.description}
                </motion.p>
              </div>
              <Button className="absolute top-4 right-4" onClick={props.onClick} aria-label="Close modal">
                <X className="size-4" />
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Button(props: { className?: string; children: ReactNode; onClick?: () => void; "aria-label": string }) {
  return (
    <button
      className={`flex items-center justify-center rounded-full border-2 border-gray-300 p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors ${
        props.className || ""
      }`.trim()}
      onClick={props.onClick}
      aria-label={props["aria-label"]}
    >
      {props.children}
    </button>
  )
}

export default LightLinearCards

