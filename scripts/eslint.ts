import stylistic from '@stylistic/eslint-plugin'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const rules = { stylistic: stylistic.configs.recommended.rules }

writeFile(resolve('__eslint_rules.json'), JSON.stringify(rules), 'utf-8')
