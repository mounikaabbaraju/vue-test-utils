// @flow

import type Wrapper from './Wrapper'
import type VueWrapper from './VueWrapper'

export default class WrapperArray implements BaseWrapper {
  wrappers: Array<Wrapper | VueWrapper>;
  length: number;

  constructor (wrappers: Array<Wrapper | VueWrapper>) {
    this.wrappers = wrappers || []
    this.length = this.wrappers.length
  }

  at (index: number): Wrapper | VueWrapper {
    if (index > this.length - 1) {
      throw new Error(`no item exists at ${index}`)
    }
    return this.wrappers[index]
  }

  contains (selector: string | Component): boolean {
    this.throwErrorIfWrappersIsEmpty('contains')

    return this.wrappers.every(wrapper => wrapper.contains(selector))
  }

  hasAttribute (attribute: string, value: string): boolean {
    this.throwErrorIfWrappersIsEmpty('hasAttribute')

    return this.wrappers.every(wrapper => wrapper.hasAttribute(attribute, value))
  }

  hasClass (className: string): boolean {
    this.throwErrorIfWrappersIsEmpty('hasClass')

    return this.wrappers.every(wrapper => wrapper.hasClass(className))
  }

  hasProp (prop: string, value: string): boolean {
    this.throwErrorIfWrappersIsEmpty('hasProp')

    return this.wrappers.every(wrapper => wrapper.hasProp(prop, value))
  }

  hasStyle (style: string, value: string): boolean {
    this.throwErrorIfWrappersIsEmpty('hasStyle')

    return this.wrappers.every(wrapper => wrapper.hasStyle(style, value))
  }

  findAll (): void {
    this.throwErrorIfWrappersIsEmpty('findAll')

    throw new Error('findAll must be called on a single wrapper, use at(i) to access a wrapper')
  }

  find (): void {
    this.throwErrorIfWrappersIsEmpty('find')

    throw new Error('find must be called on a single wrapper, use at(i) to access a wrapper')
  }

  html (): void {
    this.throwErrorIfWrappersIsEmpty('html')

    throw new Error('html must be called on a single wrapper, use at(i) to access a wrapper')
  }

  is (selector: string | Component): boolean {
    this.throwErrorIfWrappersIsEmpty('is')

    return this.wrappers.every(wrapper => wrapper.is(selector))
  }

  isEmpty (): boolean {
    this.throwErrorIfWrappersIsEmpty('isEmpty')

    return this.wrappers.every(wrapper => wrapper.isEmpty())
  }

  isVueInstance (): boolean {
    this.throwErrorIfWrappersIsEmpty('isVueInstance')

    return this.wrappers.every(wrapper => wrapper.isVueInstance())
  }

  name (): void {
    this.throwErrorIfWrappersIsEmpty('name')

    throw new Error('name must be called on a single wrapper, use at(i) to access a wrapper')
  }

  text (): void {
    this.throwErrorIfWrappersIsEmpty('text')

    throw new Error('text must be called on a single wrapper, use at(i) to access a wrapper')
  }

  throwErrorIfWrappersIsEmpty (method: string): void {
    if (this.wrappers.length === 0) {
      throw new Error(`${method} cannot be called on 0 items`)
    }
  }

  setData (data: Object): void {
    this.throwErrorIfWrappersIsEmpty('setData')

    this.wrappers.forEach(wrapper => wrapper.setData(data))
  }

  setProps (props: Object): void {
    this.throwErrorIfWrappersIsEmpty('setProps')

    this.wrappers.forEach(wrapper => wrapper.setProps(props))
  }

  trigger (event: string): void {
    this.throwErrorIfWrappersIsEmpty('trigger')

    this.wrappers.forEach(wrapper => wrapper.trigger(event))
  }

  update (): void {
    this.throwErrorIfWrappersIsEmpty('update')

    this.wrappers.forEach(wrapper => wrapper.update())
  }
}
