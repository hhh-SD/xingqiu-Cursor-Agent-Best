import { 
  Bot, 
  Map, 
  Layers, 
  Cpu, 
  Image as ImageIcon, 
  Workflow, 
  GitBranch, 
  Bug, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { Section } from './types';

export const GUIDE_CONTENT: Section[] = [
  {
    id: 'intro',
    title: '引言：Agent 编码范式',
    icon: BookOpen,
    description: '理解 Agent 如何改变软件构建方式，以及为什么需要新的使用范式。',
    content: [
      {
        title: '编码 Agent 的变革',
        content: '模型现在可以连续运行数小时，完成大规模的多文件重构，并持续迭代直到测试通过。但要充分发挥 Agent 的能力，你需要理解它们的工作原理。',
        type: 'text'
      },
      {
        title: 'Agent Harness 三大组件',
        content: [
          'Instructions：用于引导 agent 行为的 system prompt 和规则',
          'Tools：文件编辑、代码库搜索、终端执行等工具',
          'User messages：你用来指挥工作的提示词和后续交互'
        ],
        type: 'list'
      },
      {
        title: '为什么 Harness 很重要',
        content: '不同模型对相同提示词的响应方式不同。Cursor 的 agent harness 会为每个模型编排组件，处理底层细节（如 grep 与搜索工具的选择、linter 调用等），让你专注于构建软件本身。',
        type: 'tip'
      }
    ]
  },
  {
    id: 'planning',
    title: '规划与 Plan 模式',
    icon: Map,
    description: '在编写代码之前进行规划，是提升效率的关键步骤。',
    content: [
      {
        title: '规划的重要性',
        content: '研究表明，有经验的开发者倾向于先规划。规划促使思考清晰，并为 Agent 提供明确目标。',
        type: 'text'
      },
      {
        title: '使用 Plan 模式 (Shift+Tab)',
        content: [
          '分析代码库查找相关文件',
          '提出澄清问题',
          '创建包含路径和引用的详细 Markdown 计划',
          '等待确认后才开始构建'
        ],
        type: 'list'
      },
      {
        title: '管理计划',
        content: '点击 "Save to workspace" 将计划存储到 .cursor/plans/。这为团队创建了文档，并为未来的 Agent 提供了上下文。如果 Agent 生成内容不符预期，回滚并修改计划比修补 Prompt 更有效。',
        type: 'tip'
      }
    ]
  },
  {
    id: 'context',
    title: '上下文管理',
    icon: Layers,
    description: '如何高效地为 Agent 提供它所需的“认知环境”。',
    content: [
      {
        title: '自动上下文获取',
        content: '不需要手动标记每个文件。Cursor Agent 具备强大的搜索工具。例如询问 "authentication flow"，它会自动 grep 查找相关文件。',
        type: 'text'
      },
      {
        title: '实用工具 @Branch',
        content: '使用 @Branch 让 Agent 了解当前工作分支的上下文。常用 Prompt："Review the changes on this branch" 或 "What am I working on?"。',
        type: 'code'
      },
      {
        title: '对话管理：何时开始新对话',
        content: [
          '新对话：切换任务、Agent 困惑/重复犯错、完成了一个逻辑单元',
          '继续对话：迭代同一功能、需要先前上下文、调试刚构建的内容'
        ],
        type: 'list'
      },
      {
        title: '引用 @Past Chats',
        content: '开始新对话时，使用 @Past Chats 引用之前的工作，而不是复制粘贴整个对话。Agent 可以选择性读取所需上下文。',
        type: 'tip'
      }
    ]
  },
  {
    id: 'extension',
    title: '扩展 Agent 能力',
    icon: Cpu,
    description: '通过 Rules 和 Skills 自定义 Agent 的行为。',
    content: [
      {
        title: 'Rules (静态上下文)',
        content: 'Rules 提供持续生效的指令。适用于项目规范、常用命令模式。避免复制整份风格指南，应引用文件路径。',
        type: 'text'
      },
      {
        title: 'Skills (动态能力)',
        content: '定义在 SKILL.md 中。包括 Custom commands (通过 / 触发)、Hooks (动作前后脚本) 和特定领域的知识。Skills 只在相关时动态加载，保持上下文整洁。',
        type: 'text'
      }
    ]
  },
  {
    id: 'visual',
    title: '多媒体与可视化',
    icon: ImageIcon,
    description: '利用图片和截图加速开发与调试。',
    content: [
      {
        title: '从设计到代码',
        content: '粘贴设计稿截图，Agent 能识别布局、颜色和间距并生成代码。支持 Figma MCP 服务器。',
        type: 'text'
      },
      {
        title: '可视化调试',
        content: '对错误 UI 截图比文字描述更高效。Agent 还可以控制浏览器自行截屏、测试应用并验证变化。',
        type: 'text'
      }
    ]
  },
  {
    id: 'workflows',
    title: '常见高效工作流',
    icon: Workflow,
    description: '几种经过验证的高效 Agent 使用模式。',
    content: [
      {
        title: '测试驱动开发 (TDD)',
        content: [
          '1. 让 Agent 编写测试（明确说明是 TDD）',
          '2. 确认测试失败（此时不写实现）',
          '3. 提交测试',
          '4. 让 Agent 编写实现直到测试通过',
          '5. 提交代码'
        ],
        type: 'list'
      },
      {
        title: '理解新代码库',
        content: '像向队友提问一样："这个项目里的日志是如何运作的？" 或 "为什么这里调用 setUser 而不是 createUser？"。Agent 会结合 grep 和语义搜索查找答案。',
        type: 'text'
      },
      {
        title: '代码审查',
        content: '生成过程中实时查看 Diff。完成后使用 "Agent Review" -> "Find Issues" 进行自动审查。提交后使用 Bugbot 进行 PR 分析。',
        type: 'text'
      },
      {
        title: '架构生成',
        content: '提示词示例："Create a Mermaid diagram showing the data flow for our authentication system..."。有助于文档化和提前发现问题。',
        type: 'code'
      }
    ]
  },
  {
    id: 'advanced',
    title: '并行与云端 Agent',
    icon: GitBranch,
    description: '利用多模型并发和云端算力提升效率。',
    content: [
      {
        title: '原生 Worktree 支持',
        content: 'Cursor 自动为并行 Agent 创建 git worktrees。文件和更改彼此隔离，互不干扰。完成后点击 Apply 合并。',
        type: 'text'
      },
      {
        title: '多模型竞赛',
        content: '选择多个模型运行同一个 Prompt，并排比较结果。适用于棘手问题或比较代码质量。',
        type: 'tip'
      },
      {
        title: '云端 Agent',
        content: '适用于耗时任务（重构、补全测试、文档）。在远程沙箱运行，可关闭电脑稍后查看。工作流程：克隆仓库 -> 自主工作 -> 提交 PR -> 通知用户。',
        type: 'text'
      }
    ]
  },
  {
    id: 'debug',
    title: 'Debug Mode',
    icon: Bug,
    description: '针对棘手 Bug 的系统化调试方案。',
    content: [
      {
        title: '工作原理',
        content: [
          '1. 生成多个假设',
          '2. 注入日志埋点',
          '3. 要求用户复现以收集数据',
          '4. 分析行为定位根本原因',
          '5. 提出基于证据的修复'
        ],
        type: 'list'
      },
      {
        title: '适用场景',
        content: '竞争条件、时序问题、内存泄漏、功能回归。关键是提供详细的复现上下文。',
        type: 'text'
      }
    ]
  },
  {
    id: 'summary',
    title: '打造你的工作流',
    icon: CheckCircle2,
    description: '高效开发者的共同特质总结。',
    content: [
      {
        title: '关键习惯',
        content: [
          '写具体的提示：对比 "add tests" 和 "Write a test case covering edge case X using pattern Y"',
          '迭代配置：发现重复错误才添加规则，不要过度优化',
          '认真 Review：AI 越快，Review 越重要',
          '提供可验证目标：使用强类型、Linter 和测试',
          '协作态度：要求 Agent 解释，敢于质疑'
        ],
        type: 'list'
      }
    ]
  }
];