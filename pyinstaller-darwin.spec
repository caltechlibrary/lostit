# -*- mode: python -*-
# =============================================================================
# @file    pyinstaller-darwin.spec
# @brief   Spec file for PyInstaller for macOS
# @author  Michael Hucka
# @license Please see the file named LICENSE in the project directory
# @website https://github.com/caltechlibrary/lostit
# =============================================================================

import imp
import os
import sys

# The list must contain tuples: ('file', 'destination directory').
data_files = [ ('lostit/lostit.ini', 'lostit'),
               ('lostit/data/client_secrets.json', 'lostit/data'),
               ('lostit/data/help.html', 'lostit/data') ]

configuration = Analysis(['lostit/__main__.py'],
                         pathex = ['.'],
                         binaries = [],
                         datas = data_files,
                         hiddenimports = ['apiclient', 'keyring.backends',
                                          'keyring.backends.OS_X', 'wx._html',
                                          'wx._xml'],
                         hookspath = [],
                         runtime_hooks = [],
                         # For reasons I can't figure out, PyInstaller tries
                         # to load these even though they're never imported
                         # by the Lostit code.  Have to exclude them manually.
                         excludes = ['PyQt4', 'PyQt5', 'gtk', 'matplotlib',
                                     'numpy'],
                         win_no_prefer_redirects = False,
                         win_private_assemblies = False,
                         cipher = None,
                        )

application_pyz    = PYZ(configuration.pure,
                         configuration.zipped_data,
                         cipher = None,
                        )

executable         = EXE(application_pyz,
                         configuration.scripts,
                         configuration.binaries,
                         configuration.zipfiles,
                         configuration.datas,
                         name = 'lostit',
                         debug = False,
                         strip = False,
                         upx = True,
                         runtime_tmpdir = None,
                         console = False,
                        )

app             = BUNDLE(executable,
                         name = 'LostIt.app',
                         icon = 'dev/icons/generated-icons/lostit-icon-512px.icns',
                         bundle_identifier = None,
                         info_plist = {'NSHighResolutionCapable': 'True',
                                       'NSAppleScriptEnabled': False},
                        )
