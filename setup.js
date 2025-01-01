import fs from 'fs/promises'
import path from 'path'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question = (query) => new Promise((resolve) => rl.question(query, resolve))

async function replaceInFile(filePath, replacements) {
  try {
    let content = await fs.readFile(filePath, 'utf8')
    
    for (const [search, replace] of replacements) {
      content = content.replace(new RegExp(search, 'g'), replace)
    }
    
    await fs.writeFile(filePath, content, 'utf8')
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err)
  }
}

async function setup() {
  console.log('\n🚀 PWA Setup Wizard\n')

  const answers = {
    name: await question('Project name: '),
    description: await question('Project description: '),
    author: await question('Author name: '),
    themeColor: await question('Theme color (hex, e.g., #ffffff): '),
    backgroundColor: await question('Background color (hex, e.g., #ffffff): ')
  }

  rl.close()

  const files = {
    'package.json': [
      ['"name": "modern-pwa"', `"name": "${answers.name}"`],
      ['"description": ""', `"description": "${answers.description}"`],
      ['"author": ""', `"author": "${answers.author}"`]
    ],
    'client/index.html': [
      ['<title>Modern PWA</title>', `<title>${answers.name}</title>`],
      ['content="Modern PWA with Preact"', `content="${answers.description}"`],
      ['content="#ffffff"', `content="${answers.themeColor}"`]
    ],
    'vite.config.js': [
      ['name: "Modern PWA"', `name: "${answers.name}"`],
      ['short_name: "PWA"', `short_name: "${answers.name}"`],
      ['theme_color: "#ffffff"', `theme_color: "${answers.themeColor}"`]
    ]
  }

  console.log('\n📝 Customizing your PWA...')

  for (const [filePath, replacements] of Object.entries(files)) {
    await replaceInFile(filePath, replacements)
  }

  // Update manifest.json
  const manifest = {
    name: answers.name,
    short_name: answers.name,
    description: answers.description,
    theme_color: answers.themeColor,
    background_color: answers.backgroundColor,
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }

  await fs.writeFile(
    'client/public/manifest.json',
    JSON.stringify(manifest, null, 2),
    'utf8'
  )

  console.log('\n✅ Setup complete! Your PWA has been customized.')
  console.log('\nNext steps:')
  console.log('1. Add your icons in client/public/')
  console.log('2. Run npm run dev to start development')
}

setup().catch(console.error)
