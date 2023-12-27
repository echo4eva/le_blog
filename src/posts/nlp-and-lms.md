---
title: nlp and lms
description: lessons 4
date: '2023-12-26'
categories:
    - ml
published: true
---
~
# talking metal box

How could a computer even talk to us? How is it possible it can answer any question you give it (with questionable correctness)? Here’s a better question, how could a computer understand language, especially english? It’s *very* simple, natural language processing, thanks for reading. Seriously, it’s really simple.

## what is natural language processing?

Natural language processing, NLP for short, is how a computer can understand language. It’s a process that has a number of steps and components in order for it to work. It’s actually very similar to how we learn and translate other languages into ones we understand. For example in translating, if we want to understand what a sentence in Mandarin says in English, we would take the Mandarin sentence, put it in a translator, then we get it back in English. For machines, it’s the same thing but with more nerdy stuff in the “translating” part.

![Untitled](b2_1.png)

## how do machines translate/understand us?

Machines have their own language, numbers, that’s the only way we can talk to them at a level they understand. Computers are really stupid, they don’t know how to translate for themselves, so we translate our human sentences in numbers for them. We gave computers two tools to successfully understand our human sentences, tokenization and numericalization. This blog will touch on these tools in more depth.

![Untitled](b2_2.png)

## what is tokenization?

Tokenization is splitting a sentence into words, bite size pieces. Computers, like us, can’t eat a cookie whole, we like to to eat it piece by piece. Just like eating a cookie, there are many ways to tokenize, biting off pieces or tearing off pieces. There’s no right way to enjoy a cookie, same with tokenization.

There’s 3 main ways to tokenize, splitting a sentence by words, sub-words, or characters. Choosing a way to tokenize is up to the user. For example, tokenizing by word works well in English, but for Mandarin where sentences can be continuous words, it might not work.

![Untitled](b2_3.png)

## what is numericalization?

Numericalization is the process of turning the token, the word we split through tokenization, into a number. The value of the number is something that the computer understands, it’s in its *vocab*. It’s just like how we understand words and what they mean (somehow, our brains are cool). The most similar to this is a dictionary, where we have a word and the definition of the word. For computers, it’s token and the value of the token.

![Untitled](b2_4.png)

Now that you know the tools, we can get into more detail on how a piece of metal can understand human language.

# inside the metal box

There are components that we’re missing to make a machine understand us. We’re missing a recurrent neural network and an embedding matrix. New words, scary, but don’t worry, these are basically the deepest layers of a translator that actually do all the work of translating and understanding.

## what is a recurrent neural network?

Recurrent neural network, RNN, is type of neural network that takes in data sequentially. Because of this, the previous inputs affect the current inputs and their output. So for example, when given this incomplete sentence “Listen to your,” the RNN could think of many words to finish the sentence. Depending on the previous input, all the words in the incomplete sentence, the RNN would say “heart” or “mom” depending on if it’s a Bladee fan or a loving son (which can be both cases, me). In other words, it would finish the sentence depending on its *embedding matrix.*

![Untitled](b2_5.png)

## what is an embedding matrix?

I honestly don’t know, but they’re really cool. The way that I see it, it’s a dictionary for the neural network. Just like how “love” has different meanings to us as individuals, the embedding matrix helps the neural network determine how the word “love” is used in a sentence and what it means in that sentence.

In my own technical perspective, they’re basically weights for individual words, kind of like how we use weights along with the input in ML tasks to help determine the output. Look at it like this, in the case that there is 100 words, each word would have a weight/relationship to all the other 99 words. These weights would help determine context of a sentence and meaning of a sentence.

To push it further using the “love has different meanings” example, let’s see how an embedding matrix might work. Let’s get a sad cat that just got broken up with, they might associate “love” with “pain.”

![Untitled](b2_6.png)

Where a happy cat that’s been in a loving relationship for 10 years, had ups and downs, but ultimately communicates well emotionally with their partner no matter what situation, might associate “love” with “happiness.”

![Untitled](b2_7.png)

# the cute bow on the metal box

Okay, now going through how to talk to a talking metal box and what’s inside the metal box, we can now wrap this metal box and finish it with a cute bow. We’ll be going through what language models are and how some might be made.

## what are language models?

Language models are models that predict the next word of a given sentence, they basically have use of RNNs. There are more uses of LMs with fine tuning such as ChatGPT and DALLE.

## how are language models made?

Language model’s main purpose is to understand a language right? So they’re made by reading documents of that specific language. Some language model take in all of Wikipedia to learn English! But how do they actually learn? Self supervised learning.

Usually in ML, in order for a machine to learn, it needs labels to say, “oh I got this wrong, thanks to this label, I will know what other similar things that look like this are called,” in an example when trying to identify if a picture contains a cat or dog. When it comes to NLP, the inputs contain the label.

In self supervised learning, the machine takes the untouched input and makes it it’s label, while it cuts off the last words of the input for its input. It’s so it can predict future words based on past words. This is where the embedding matrix, vocab, and next word predictions/output come in.

![Untitled](b2_8.png)

# my gift to you (conclusion)

We wrapped this metal box to give it to you to in the end. Now you know everything about NLP and LMs, kinda! I wrote this to review what I’ve learned on Christmas week, I wrote this one day after Christmas and the way I was writing the headers got me thinking about Christmas, so why not make the conclusion cheesy!

![Untitled](b2_9.png)

## what will i do? take way

Lesson 4 of [course.fast.ai](https://course.fast.ai/Lessons/lesson4.html) opened my eyes. It’s easier than I expected to make a machine talk, I thought you would need a LLM with tons of data and math before I got into this course and lesson. I plan to research on fine tuning a small LM to answer questions based on documents I’ll give it. I feel like that would be a good way to practice what I’ve learned and to see my goal come to fruition which is mentioned in my [previous blog](https://blog4eva.vercel.app/first-epoch).

I’m so excited to work with LMs!